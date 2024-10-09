'use client';

import { signIn } from "next-auth/react";

import { FcGoogle} from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";


export const Social = () => {
    const onClick = (provider: "google" | "github" | "facebook" | "linkedin") => {
        signIn(provider, { 
            callbackUrl: DEFAULT_LOGIN_REDIRECT 
        }); 
    }
    return (
        <div className="flex flex-col w-full items-center">
            <div className="mt-2">
                <Button 
                    size="lg"
                    className="min-w-80"
                    variant="outline"
                    onClick={() => onClick("google")}
                >
                    <FcGoogle  className="h-5 w-5" />
                    <span className="pl-1"> Google</span>
                </Button>
            </div>
            <div className="mt-2">
                <Button 
                    size="lg"
                    className="min-w-80"
                    variant="outline"
                    onClick={() => onClick("linkedin")}
                >
                    <FaLinkedin  className="h-5 w-5" />
                    <span className="pl-1"> LinkedIn</span>
                </Button>
            </div>
            <div className="mt-2">
                <Button 
                    size="lg"
                    className="min-w-80"
                    variant="outline"
                    onClick={() => onClick("github")}
                >
                    <FaGithub  className="h-5 w-5" />
                    <span className="pl-1"> Github</span>
                </Button>
            </div>
            {/* <div className="mt-2">
                <Button 
                    size="lg"
                    className="min-w-80"
                    variant="outline"
                    onClick={() => onClick("facebook")}
                >
                    <FaFacebook  className="h-5 w-5" />
                    <span className="pl-1"> Facebook</span>
                </Button>
            </div> */}
        </div>
    );
    }
