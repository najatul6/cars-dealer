// import useAuth from "../../../Hooks/useAuth";
import { motion } from "framer-motion";
import useRole from "../../../Hooks/useRole";
import {  NavLink } from "react-router-dom";
// import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { SquareChartGantt, BookA, LifeBuoy, Car, Star, Truck, DollarSign, Users, Package } from "lucide-react";

const DashboardSidebar = ({ setSidebarOpen, sidebarOpen }) => {
  // const { logOut } = useAuth();
  const [userRole] = useRole();
  // TODO: Add a toast notification for logging out
  // const handleLogout = () => {
  //   toast.promise(logOut(), {
  //     pending: "Logging out...",
  //     success: "Logged out successfully",
  //     error: "Error logging out",
  //   });
  // };

  const userNav = [
    {
        label: "Overview",
        path: "/dashboard/overview",
        icon: <SquareChartGantt />,
    },
    {
        label: "My Orders",
        path: "/dashboard/my-orders",
        icon: <BookA />,
    },
    {
        label: "Support Tickets",
        path: "/dashboard/support-tickets",
        icon: <LifeBuoy />,
    },
    {
        label: "Services",
        path: "/dashboard/services",
        icon: <Car />,
    },
    {
        label: "Latest Reviews",
        path: "/dashboard/reviews",
        icon: <Star />,
    },
];

  
const agentNav = [
  {
      label: "Overview",
      path: "/dashboard/overview",
      icon: <SquareChartGantt />,
  },
  {
      label: "Orders to Process",
      path: "/dashboard/orders-to-process",
      icon: <Truck />,
  },
  {
      label: "Customer Support",
      path: "/dashboard/customer-support",
      icon: <LifeBuoy />,
  },
  {
      label: "Services Management",
      path: "/dashboard/services-management",
      icon: <Car />,
  },
  {
      label: "Finance Reports",
      path: "/dashboard/finance-reports",
      icon: <DollarSign />,
  },
];

  
const adminNav = [
  {
      label: "Dashboard Overview",
      path: "/dashboard/overview",
      icon: <SquareChartGantt />,
  },
  {
      label: "Manage Users",
      path: "/dashboard/manage-users",
      icon: <Users />,
  },
  {
      label: "Manage Products",
      path: "/dashboard/manage-products",
      icon: <Package />,
  },
  {
      label: "Manage Services",
      path: "/dashboard/manage-services",
      icon: <Car />,
  },
  {
      label: "Finance Overview",
      path: "/dashboard/finance-overview",
      icon: <DollarSign />,
  },
  {
      label: "Latest Reviews",
      path: "/dashboard/latest-reviews",
      icon: <Star />,
  },
];


  const navItems = userRole === "admin" ? adminNav : userRole === "agent" ? agentNav : userNav;
  return (
    <>
      <nav id="sidebar" className={`lg:min-w-[250px] w-max max-lg:min-w-8`}>
        
        <div
          id="sidebar-collapse-menu"
          style={{ height: "calc(100vh - 72px)" }}
          className={`${
            sidebarOpen
              ? "block w-[250px] visible opacity-[1]"
              : "block w-[32px] "
          } bg-background2 flex flex-col justify-between border-r shadow-lg h-screen fixed py-6 px-4 top-[70px] left-0 overflow-auto z-[99] lg:min-w-[250px] lg:w-max  transition-all duration-500`}
        >
          <ul className="space-y-2">
            {navItems?.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      ease: "easeOut",
                      duration: 0.6,
                      delay: index * 0.2,
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                    key={index}
                  >
                    <NavLink
                      onClick={() => setSidebarOpen(!sidebarOpen)}
                      to={item.path}
                      className={({ isActive }) =>
                        `text-white text-sm flex gap-2 items-center rounded-md px-4 py-2 transition-all ${
                          isActive
                            ? "text-red-600 bg-background"
                            : "hover:bg-background text-baseColor"
                        }`
                      }
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </NavLink>
                  </motion.div>
                ))
              }
          </ul>

          
        </div>
      </nav>

      <button
        id="toggle-sidebar"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className={`${
          sidebarOpen ? "left-[236px]" : "left-[10px]"
        } lg:hidden w-8 h-8 z-[100] fixed top-[74px]  cursor-pointer bg-background2 flex items-center justify-center rounded-full outline-none transition-all duration-500`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#d4ff00"
          className={`${sidebarOpen ? "rotate-180" : ""} w-3 h-3`}
          viewBox="0 0 55.752 55.752"
        >
          <path
            d="M43.006 23.916a5.36 5.36 0 0 0-.912-.727L20.485 1.581a5.4 5.4 0 0 0-7.637 7.638l18.611 18.609-18.705 18.707a5.398 5.398 0 1 0 7.634 7.635l21.706-21.703a5.35 5.35 0 0 0 .912-.727 5.373 5.373 0 0 0 1.574-3.912 5.363 5.363 0 0 0-1.574-3.912z"
            data-original="#000000"
          />
        </svg>
      </button>
    </>
  );
};

DashboardSidebar.propTypes = {
  setSidebarOpen: PropTypes.func.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
};

export default DashboardSidebar;
