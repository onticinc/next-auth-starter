import DashBoardNavbar from "./components/DashboardNavbar";

const DashboardLayout = ({ children } : { children: React.ReactNode}) => {
  return (
    <div className="flex flex-col gap-y-4">
        <DashBoardNavbar />
      <main>{children}</main>
    </div>
  );
}

export default DashboardLayout;