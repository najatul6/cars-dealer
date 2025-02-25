import { useState } from "react";
import { Outlet } from "react-router-dom"
import DashboardSidebar from "../Components/Dashboard/Common/DashboardSidebar";

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div  className="relative pt-[70px] h-screen scroll-smooth">
        <div>
        <div className="flex items-start">
          <DashboardSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>

          <section className="main-content w-full overflow-auto p-6 ">
              <Outlet/>
            {/* <div className="overflow-x-auto no-scrollbar">
            </div> */}
          </section>
        </div>
      </div>
    </div>
  )
}

export default Dashboard