/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

// import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/src/lib/zodValidator";
import { registerUserValidationZodSchema } from "@/src/zod/auth.validation";


export const registerUser = async (_currentState: any, formData: any): Promise<any> => {
    try {
        // console.log(formData.get("address"));
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
            profile: {
                name: validatedPayload.name,
                contactNumber: validatedPayload.contactNumber,
                email: validatedPayload.email,
            }
        }

        const newFormData = new FormData();

        newFormData.append("data", JSON.stringify(registerData));

        if (formData.get("file")) {
            newFormData.append("file", formData.get("file") as Blob);
        }

        const res = await fetch("http://localhost:5000/api/v1/user/create-user", {
            method: "POST",
            body: newFormData,
        })

        const result = await res.json();
        console.log(res, "res");

        // if (result.success) {
        //     await loginUser(_currentState, formData);
        // }

        return result;

    } catch (error: any) {
        if (error?.digest?.startsWith('NEXT_REDIRECT')) {
            throw error;
        }
        console.log(error);
        return { success: false, message: `${process.env.NODE_ENV === 'development' ? error.message : "Registration Failed. Please try again."}` };
    }
}