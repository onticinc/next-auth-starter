"use server"

import * as z from "zod";

import { signIn } from "@/auth"
import { LoginSchema } from "@/schemas";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"; 
import { AuthError } from "next-auth";

export type LoginResponse = {
    success?: string;
    error?: string;
}
export const login = async (values: z.infer<typeof LoginSchema>) => {
    

    console.log("Login values: ", values);
    
    const validatedFields = LoginSchema.safeParse(values);

    console.log("Validated fields: ", validatedFields);
    
    if (!validatedFields.success) {
        return {error: "Invalid fields"};
    } 
    
    const {email, password} = validatedFields.data;

    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT,
        });
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type){
                case "CredentialsSignin": {
                    return {error: "Invalid credentials."};
                }
                default: {
                    return {error: "Something went wrong!"};
                }
            }
            
        }
        throw error;
    };
}