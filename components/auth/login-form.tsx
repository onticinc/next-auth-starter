"use client";

import * as z from "zod";

import { useForm } from 'react-hook-form';
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from "@/schemas";

import { Input } from "@/components/ui/input";

import {
    Form, 
    FormControl, 
    FormField,
    FormItem, 
    FormLabel, 
    FormMessage,

} from "@/components/ui/form"

import { CardWrapper } from './card-wrapper';
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { login } from "@/actions/auth/login";




export const LoginForm = () => {

    const searchParams = useSearchParams();
    const urlError = searchParams.get('error') === "OAuthAccountNotLinked"
        ? "Email already in use with another provider." : "";


    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError("");
        setSuccess(""); 

        startTransition(() => {
            login(values)
                .then((data) => {
                    setError(data?.error);
                    // TODO: Add when we add 2fa
                    // setSuccess(data?.success);
                })
                .catch((error) => {
                    setError("An error occurred: " + error.message);
                    setSuccess("");
                });
        });
    };

    return (
        <CardWrapper
            headerLabel="Welcome Back"
            backButtonLabel="Don't have an account?"
            backButtonHref='/auth/register'
            showSocial={true}
        >
            <Form {...form}>
                <form 
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    <div className="space-y-4">
                        <FormField 
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input 
                                            {...field}
                                            disabled={isPending}
                                            placeholder="john.doe@example.com"
                                            type="email"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>  
                            )}
                        />
                        <FormField 
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input 
                                            {...field}
                                            disabled={isPending}
                                            placeholder="********"
                                            type="password"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>  
                            )}
                        />
                    </div>
                    <FormSuccess message={success}/>
                    <FormError message={error || urlError }/>
                    <Button 
                        disabled={isPending}
                        type="submit"
                        className="w-full"
                    >
                        Login
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    );
}