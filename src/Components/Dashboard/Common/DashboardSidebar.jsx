// import useAuth from "../../../Hooks/useAuth";
import { motion } from "framer-motion";
import useRole from "../../../Hooks/useRole";
import {  NavLink } from "react-router-dom";
// import { toast } from "react-toastify";
import PropTypes from "prop-types";
import {
  SquareChartGantt, BookA, LifeBuoy, Heart, User,
  ClipboardList, Truck, PackageCheck, MessagesSquare, Wallet,
  PackageOpen, RotateCcw, Newspaper, PackageSearch, UserCog,
   Headset, BarChart, CreditCard, Settings
} from "lucide-react";

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
        label: "Wishlist",
        path: "/dashboard/wishlist",
        icon: <Heart />,
    },
    {
        label: "Profile Settings",
        path: "/dashboard/profile-settings",
        icon: <User />,
    },
  ];
  
   const agentNav = [
    {
        label: "Overview",
        path: "/dashboard/overview",
        icon: <SquareChartGantt />,
    },
    {
        label: "Assigned Orders",
        path: "/dashboard/assigned-orders",
        icon: <ClipboardList />,
    },
    {
        label: "Processing Orders",
        path: "/dashboard/agent-process-orders",
        icon: <Truck />,
    },
    {
        label: "Completed Orders",
        path: "/dashboard/agent-complete-orders",
        icon: <PackageCheck />,
    },
    {
        label: "Customer Inquiries",
        path: "/dashboard/customer-inquiries",
        icon: <MessagesSquare />,
    },
    {
        label: "Earnings & Payouts",
        path: "/dashboard/earnings",
        icon: <Wallet />,
    },
  ];
  
   const adminNav = [
    {
        label: "Overview",
        path: "/dashboard/overview",
        icon: <SquareChartGantt />,
    },
  
    {
        label: "Pending Orders",
        path: "/dashboard/new-orders",
        icon: <PackageOpen />,
    },
    {
        label: "Processing Orders",
        path: "/dashboard/process-orders",
        icon: <Truck />,
    },
    {
        label: "Completed Orders",
        path: "/dashboard/complete-orders",
        icon: <PackageCheck />,
    },
    {
        label: "Refund Requests",
        path: "/dashboard/refund-requests",
        icon: <RotateCcw />,
    },
    {
        label: "Categories",
        path: "/dashboard/categories-control",
        icon: <Newspaper />,
    },
    {
        label: "Products",
        path: "/dashboard/products-control",
        icon: <PackageSearch />,
    },
  
    {
        label: "All Users",
        path: "/dashboard/users-control",
        icon: <UserCog />,
    },
    {
        label: "Agents",
        path: "/dashboard/agents-control",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-user"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M6.376 18.91a6 6 0 0 1 11.249.003"/><circle cx="12" cy="11" r="4"/></svg>,
    },
    {
        label: "Customer Support",
        path: "/dashboard/customer-support",
        icon: <Headset />,
    },
    {
        label: "Sales Reports",
        path: "/dashboard/reports",
        icon: <BarChart />,
    },
    {
        label: "Transactions",
        path: "/dashboard/transactions",
        icon: <CreditCard />,
    },
    {
        label: "Payouts",
        path: "/dashboard/payouts",
        icon: <Wallet />,
    },
  
    {
        label: "Settings",
        path: "/dashboard/settings",
        icon: <Settings />,
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
                            ? "text-baseColor bg-background"
                            : "hover:bg-background"
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
