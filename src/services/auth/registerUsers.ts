/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import { zodValidator } from "@/src/lib/zodValidator";
import { registerUserValidationZodSchema } from "@/src/zod/auth.validation";
import { loginUser } from "./loginUser";
import { serverFetch } from "@/src/lib/server-fetch";


export const registerUser = async (_currentState: any, formData: any): Promise<any> => {
    try {
        
        const payload = {
            name: formData.get('name'),
            contactNumber: formData.get('contactNumber'),
            email: formData.get('email'),
            password: formData.get('password'),
            confirmPassword: formData.get('confirmPassword'),
        }

        if (zodValidator(payload, registerUserValidationZodSchema).success === false) {
            return zodValidator(payload, registerUserValidationZodSchema);
        }

        const validatedPayload: any = zodValidator(payload, registerUserValidationZodSchema).data;

        const registerData = {
            password: validatedPayload.password,
            contactNumber:validatedPayload.contactNumber,
            profile: {
                name: validatedPayload.name,
                email: validatedPayload.email,
            }
        }

        const newFormData = new FormData();

        newFormData.append("data", JSON.stringify(registerData));

        if (formData.get("file")) {
            newFormData.append("file", formData.get("file") as Blob);
        }

        const res = await serverFetch.post("/user/create-user", {      
            body: newFormData,
        })

        const result = await res.json();
       

        if (result.success) {
            await loginUser(_currentState, formData);
        }

        return result;

    } catch (error: any) {
        if (error?.digest?.startsWith('NEXT_REDIRECT')) {
            throw error;
        }
        console.log(error);
        return { success: false, message: `${process.env.NODE_ENV === 'development' ? error.message : "Registration Failed. Please try again."}` };
    }
}