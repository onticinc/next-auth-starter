'use client';

import { FcGoogle} from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";


export const Social = () => {
    return (
        <div className="flex flex-col w-full items-center">
            <div className="mt-2">
                <Button 
                    size="lg"
                    className="min-w-80"
                    variant="outline"
                    onClick={() => {}}
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
                    onClick={() => {}}
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
                    onClick={() => {}}
                >
                    <FaGithub  className="h-5 w-5" />
                    <span className="pl-1"> Github</span>
                </Button>
            </div>
            <div className="mt-2">
                <Button 
                    size="lg"
                    className="min-w-80"
                    variant="outline"
                    onClick={() => {}}
                >
                    <FaFacebook  className="h-5 w-5" />
                    <span className="pl-1"> Facebook</span>
                </Button>
            </div>


        </div>
    );
    }
