import NextAuth, {type DefaultSession } from "@auth/core";
import { UserRole } from "@prisma/client";

export type ExtendedUser = DefaultSession["user"] & {
    role: UserRole;
};


declare module "next-auth" {
    interface Session extends DefaultSession {
        user: ExtendedUser;
    }
}