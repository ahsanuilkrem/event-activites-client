"use server"

/* eslint-disable @typescript-eslint/no-explicit-any */

import jwt, { JwtPayload } from "jsonwebtoken";
import { getCookie } from "./tokenHandlers";
import { serverFetch } from "@/src/lib/server-fetch";
import { IUser } from "@/src/types/user.interface";

export const getUserInfo = async (): Promise<IUser | any> => {
    let userInfo: IUser | any;
    try {

        const response = await serverFetch.get("/auth/me", {
            next: { tags: ["user-info"], revalidate:180 }
        })

        const result = await response.json();

        if (result.success) {
            const accessToken = await getCookie("accessToken");

            if (!accessToken) {
                throw new Error("No access token found");
            }

            const verifiedToken = jwt.verify(accessToken, process.env.JWT_SECRET as string) as JwtPayload;

            userInfo = {
                name: verifiedToken.name || "Unknown User" ,
                email: verifiedToken.email,
                role: verifiedToken.role,

            }
        }

        userInfo = {
            name: result.data?.admin?.name || result.data?.profile?.name || result.data?.name || "Unknown User",
            id: result.data?.profile?.id,
            ...result.data
        };

        // console.log("userInfo", userInfo)

        return userInfo;
    } catch (error: any) {
        console.log(error);
        return {
            id: "",
            name: "",
            email: "",
            role: "USER",
        };
    }

}