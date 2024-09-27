import NextAuth, {DefaultSession, User} from "next-auth";
import { UserRole } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { getUserById } from "@/data/user";
import { db } from "@/lib/db";
import authConfig from "@/auth.config";
import { JWT } from "next-auth/jwt";
import { AdapterUser } from "next-auth/adapters";



export const {
    handlers: { GET, POST},
    auth,
    signIn,
    signOut,
}  = NextAuth({
    callbacks: {

        // async signIn({ user }: { user: User | AdapterUser }) {
        //     if (!user.id) {
        //         return false; // Handle case where user.id is undefined
        //     }

        //     const existingUser = await getUserById(user.id);

        //     if (!existingUser || !existingUser.emailVerified) { 
        //         return false;
        //     }

        //     return true; // Ensure a boolean value is returned
        // },


        async session({ token, session }: {token: JWT; session: any },) {
            // console.log(
            //     "sessionToken",
            //     token
            // );

            if (token.sub && session.user) {
                session.user.id = token.sub;
            }

            if (token.role && session.user) {
                session.user.role = token.role as UserRole;
            }

            return session;
        },
        async jwt({ token}: { token: JWT }) {
            
            if (!token.sub) return token;
            
            const existingUser = await getUserById(token.sub);

            if (!existingUser) return token;

            token.role = existingUser.role;
            
            return token; // Ensure the token is returned
        },
    },


    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    ...authConfig,
});



 