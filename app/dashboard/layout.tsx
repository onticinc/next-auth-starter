const DashboardLayout = ({ children } : { children: React.ReactNode}) => {
  return (
    <div className="flex flex-col gap-y-4">
      <main>{children}</main>
    </div>
  );
}