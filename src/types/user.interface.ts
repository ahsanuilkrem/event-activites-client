import { UserRole } from "../lib/auth-utils";

export interface IUser {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    contactNumber: string;
    status: "ACTIVE" | "BLOCKED" | "DELETED";
    createdAt?: string;
    updatedAt?: string;
    profile?:   IHost;
}

export interface IHost {
    id: string;
    name: string;
    email: string;
    bio: string;
    profileImage: string;
    location: string;
    interests: string[];
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
}