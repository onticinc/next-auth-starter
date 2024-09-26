import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { JWT } from "next-auth/jwt";

import { db } from "@/lib/db";
import authConfig from "@/auth.config";

export const {
    handlers: { GET, POST},
    auth,
    signIn,
    signOut,
}  = NextAuth({
    callbacks: {
        async session({ token, user }: {token: JWT; user: any },) {
            return user;
        },
        async jwt({ token}: { token: JWT }) {
            console.log({ token });
            return token; // Ensure the token is returned
        },
    },


    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    ...authConfig,
});



 