const AuthLayout = ({ 
    children 
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full flex items-center justify-center">
            <main>{children}</main>
        </div>
    );
}

export default AuthLayout;