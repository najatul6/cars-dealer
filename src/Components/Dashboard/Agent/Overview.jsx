import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SquareChartGantt,ClipboardList,Wallet,MessagesSquare,PackageCheck,Truck } from "lucide-react";

const Overview = () => {
    const [overviewData, setOverviewData] = useState({
        orders: 0,
        assignedOrders: 0,
        processingOrders: 0,
        completedOrders: 0,
      });
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
    
      const axiosSecure = useAxiosSecure();
    
      useEffect(() => {
        const fetchAgentData = async () => {
          try {
            const response = await axiosSecure.get(`/agent/overview`);
            setOverviewData(response.data);
          } catch (error) {
            console.error("Error fetching agent overview data:", error);
          }
        };
    
        fetchAgentData();
      }, [axiosSecure]);
    
      return (
        <div className="dashboard-overview-container">
          <div className="overview-header flex justify-between items-center py-4 px-6">
            <h2 className="text-2xl font-bold text-white py-4">Agent Dashboard Overview</h2>
          </div>
    
          {/* Overview Stats */}
          <div className="overview-stats grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6 py-4">
            {/* Orders */}
            <motion.div
              className="stat-card bg-background rounded-lg shadow-lg p-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-sm text-gray-400">Assigned Orders</h3>
              <h2 className="text-xl text-white font-semibold">{overviewData.assignedOrders}</h2>
              <Link to="/dashboard/assigned-orders" className="text-baseColor hover:underline">
                View Assigned Orders
              </Link>
            </motion.div>
    
            {/* Processing Orders */}
            <motion.div
              className="stat-card bg-background rounded-lg shadow-lg p-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-sm text-gray-400">Processing Orders</h3>
              <h2 className="text-xl text-white font-semibold">{overviewData.processingOrders}</h2>
              <Link to="/dashboard/agent-process-orders" className="text-baseColor hover:underline">
                View Processing Orders
              </Link>
            </motion.div>
    
            {/* Completed Orders */}
            <motion.div
              className="stat-card bg-background rounded-lg shadow-lg p-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-sm text-gray-400">Completed Orders</h3>
              <h2 className="text-xl text-white font-semibold">{overviewData.completedOrders}</h2>
              <Link to="/dashboard/agent-complete-orders" className="text-baseColor hover:underline">
                View Completed Orders
              </Link>
            </motion.div>
          </div>
    
          {/* Agent Sidebar with Navigation */}
          <div className="agent-nav mt-6 p-4 bg-background rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-white mb-4">Agent Navigation</h3>
            <ul className="space-y-3">
              {agentNav.map((navItem) => (
                <li key={navItem.path} className="text-white">
                  <Link to={navItem.path} className="flex items-center space-x-2 hover:text-baseColor">
                    {navItem.icon}
                    <span>{navItem.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    };


export default Overview