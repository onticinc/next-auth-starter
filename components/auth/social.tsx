'use client';

import { FcGoogle} from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";


export const Social = () => {
    return (
        <div className="col col-span-12 items-center gap-x-2">
            <div className="col-span-3">
                <Button 
                    size="lg"
                    className="w-full"
                    variant="outline"
                    onClick={() => {}}
                >
                    <FcGoogle  className="h-5 w-5" />
                    <span className="pl-1"> Google</span>
                </Button>
            </div>
            <div className="col-span-3 mt-2">
                <Button 
                    size="lg"
                    className="w-full"
                    variant="outline"
                    onClick={() => {}}
                >
                    <FaLinkedin  className="h-5 w-5" />
                    <span className="pl-1"> LinkedIn</span>
                </Button>
            </div>
            <div className="col-span-3 mt-2">
                <Button 
                    size="lg"
                    className="w-full"
                    variant="outline"
                    onClick={() => {}}
                >
                    <FaGithub  className="h-5 w-5" />
                    <span className="pl-1"> Github</span>
                </Button>
            </div>
            <div className="col-span-3 mt-2">

                <Button 
                    size="lg"
                    className="w-full"
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
