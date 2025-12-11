import { UserRole } from "../lib/auth-utils";


export interface UserInfo {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    status: "ACTIVE" | "BLOCKED" | "DELETED";
    createdAt: string;
    updatedAt: string;
}

export interface IHost {
    id: string;
    name: string;
    email: string;
    bio: string;
    profileImage: string;
    location: string;
    interests: string;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
}