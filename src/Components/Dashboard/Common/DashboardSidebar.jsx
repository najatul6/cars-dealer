import useAuth from "../../../Hooks/useAuth";
import { motion } from "framer-motion";
import useRole from "../../../Hooks/useRole";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import {
    SquareChartGantt,
    BookA,
    UserCog,
    Truck,
    PackageOpen,
    PackageCheck,
    Newspaper,
    PackageSearch,
  } from "lucide-react";
const DashboardSidebar = ({ setSidebarOpen, sidebarOpen }) => {
  const { logOut } = useAuth();
  const [userRole] = useRole();
  const handleLogout = () => {
    toast.promise(logOut(), {
        pending: "Logging out...",
        success: "Logged out successfully",
        error: "Error logging out",
      });
  }

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
      label: "Categories Management",
      path: "/dashboard/categories-control",
      icon: <Newspaper />,
    },
    {
      label: "Products Management",
      path: "/dashboard/products-control",
      icon: <PackageSearch />,
    },
    {
      label: "Users Management",
      path: "/dashboard/users-control",
      icon: <UserCog />,
    },
  ];
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
          } bg-background2 flex flex-col justify-between shadow-lg h-screen fixed py-6 px-4 top-[70px] left-0 overflow-auto z-[99] lg:min-w-[250px] lg:w-max  transition-all duration-500`}
        >
          <ul className="space-y-2">
            {userRole === "user"
              ? userNav?.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
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
                        `text-white text-sm flex items-center rounded-md px-4 py-2 transition-all ${
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
              : adminNav?.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      ease: "easeOut",
                      duration: 0.6,
                      delay: index * 0.2,
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <NavLink
                      to={item.path}
                      onClick={() => setSidebarOpen(!sidebarOpen)}
                      className={({ isActive }) =>
                        `text-sm flex items-center rounded-md px-4 py-2 transition-all hover:text-baseColor ${
                          isActive
                            ? "bg-background text-baseColor"
                            : " text-white hover:bg-background"
                        }`
                      }
                    >
                      <p className="mr-3">{item.icon}</p>
                      <span>{item.label}</span>
                    </NavLink>
                  </motion.div>
                ))}
          </ul>

          <div className="mt-6">
            <hr className="py-5" />
            <h6 className="text-baseColor text-sm font-bold px-4">Actions</h6>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  to="/dashboard/my-profile"
                  className="text-white text-sm flex items-center hover:bg-background rounded-md px-4 py-2 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-[18px] h-[18px] mr-3"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M437.02 74.98C388.668 26.63 324.379 0 256 0S123.332 26.629 74.98 74.98C26.63 123.332 0 187.621 0 256s26.629 132.668 74.98 181.02C123.332 485.37 187.621 512 256 512s132.668-26.629 181.02-74.98C485.37 388.668 512 324.379 512 256s-26.629-132.668-74.98-181.02zM111.105 429.297c8.454-72.735 70.989-128.89 144.895-128.89 38.96 0 75.598 15.179 103.156 42.734 23.281 23.285 37.965 53.687 41.742 86.152C361.641 462.172 311.094 482 256 482s-105.637-19.824-144.895-52.703zM256 269.507c-42.871 0-77.754-34.882-77.754-77.753C178.246 148.879 213.13 114 256 114s77.754 34.879 77.754 77.754c0 42.871-34.883 77.754-77.754 77.754zm170.719 134.427a175.9 175.9 0 0 0-46.352-82.004c-18.437-18.438-40.25-32.27-64.039-40.938 28.598-19.394 47.426-52.16 47.426-89.238C363.754 132.34 315.414 84 256 84s-107.754 48.34-107.754 107.754c0 37.098 18.844 69.875 47.465 89.266-21.887 7.976-42.14 20.308-59.566 36.542-25.235 23.5-42.758 53.465-50.883 86.348C50.852 364.242 30 312.512 30 256 30 131.383 131.383 30 256 30s226 101.383 226 226c0 56.523-20.86 108.266-55.281 147.934zm0 0"
                      data-original="#000000"
                    />
                  </svg>
                  <span>Profile</span>
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="text-white text-sm flex w-full items-center hover:bg-background rounded-md px-4 py-2 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-[18px] h-[18px] mr-3"
                    viewBox="0 0 6.35 6.35"
                  >
                    <path
                      d="M3.172.53a.265.266 0 0 0-.262.268v2.127a.265.266 0 0 0 .53 0V.798A.265.266 0 0 0 3.172.53zm1.544.532a.265.266 0 0 0-.026 0 .265.266 0 0 0-.147.47c.459.391.749.973.749 1.626 0 1.18-.944 2.131-2.116 2.131A2.12 2.12 0 0 1 1.06 3.16c0-.65.286-1.228.74-1.62a.265.266 0 1 0-.344-.404A2.667 2.667 0 0 0 .53 3.158a2.66 2.66 0 0 0 2.647 2.663 2.657 2.657 0 0 0 2.645-2.663c0-.812-.363-1.542-.936-2.03a.265.266 0 0 0-.17-.066z"
                      data-original="#000000"
                    />
                  </svg>
                  <span>Logout</span>
                </button>
              </li>
            </ul>
          </div>
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
}

export default DashboardSidebar;
