import AuthNavbar from "./components/AuthNavbar";

const AuthLayout = ({ children } : any) => {
    return (
        <div className="flex flex-col gap-y-4">
            <AuthNavbar />
            <main>{children}</main>
        </div>
    );
}

export default AuthLayout;