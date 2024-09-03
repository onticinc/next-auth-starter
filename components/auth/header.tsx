import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({ 
  subsets:["latin"], 
  weight: ["600"]
});

interface HeaderProps {
    label: string;
};

export const Header = ({
    label
}: HeaderProps) => {
    return (
        <div className="w-full items-center justify-center flex flex-col gap-y-4">
            
            <h1 className={cn("text-sxl font-semibold", font.className)}>🔐 Auth  </h1>
            
            <p className="text-sm text-muted-foreground">
                {label}
            </p>

        </div>
    );
} 
