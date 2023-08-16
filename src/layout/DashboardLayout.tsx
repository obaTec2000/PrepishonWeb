import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  return (
    <div>
      <Sidebar />
      <div className="lg:ml-[280px]">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
