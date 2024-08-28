import Link from "next/link";
import { FC } from "react";

const AuthNavbar: FC = () => {
    return (
        <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <Link href="/" className="text-xl font-bold">My App</Link>
            <div>
                <Link href="/login" className="p-2">Login</Link>
                <Link href="/register" className="p-2">Register</Link>
            </div>
        </nav>
    );
}

export default AuthNavbar;
