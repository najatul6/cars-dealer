import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  PackageOpen,
  Truck,
  PackageCheck,
  BarChart,
  Wallet,
} from "lucide-react";

const Overview = () => {
  
  const [overviewData, setOverviewData] = useState({
    orders: 0,
    pendingOrders: 0,
    processingOrders: 0,
    completedOrders: 0,
    users: 0,
    earnings: 0,
  });

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await axiosSecure.get(`/admin/overview`);
        setOverviewData(response.data);
      } catch (error) {
        console.error("Error fetching admin overview data:", error);
      }
    };

    fetchAdminData();
  }, [axiosSecure]);

  return (
    <div className="admin-dashboard-container  py-6">
      <div className="overview-header flex justify-between items-center py-4">
        <h2 className="text-3xl font-bold text-white">
          Admin Dashboard Overview
        </h2>
        <Link
          to="/dashboard/settings"
          className="text-baseColor hover:underline"
        >
          Settings
        </Link>
      </div>

      {/* Order Status Section */}
      <div className="order-status-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
        {/* Total Orders */}
        <motion.div
          className="stat-card bg-background rounded-lg shadow-lg p-6 flex flex-col items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <PackageOpen className="text-3xl text-baseColor mb-4" />
          <h3 className="text-lg text-white font-semibold">Total Orders</h3>
          <h2 className="text-3xl text-white">{overviewData.orders}</h2>
          <Link
            to="/dashboard/orders"
            className="text-baseColor hover:underline mt-3"
          >
            View All Orders
          </Link>
        </motion.div>

        {/* Pending Orders */}
        <motion.div
          className="stat-card bg-background rounded-lg shadow-lg p-6 flex flex-col items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Truck className="text-3xl text-orange-400 mb-4" />
          <h3 className="text-lg text-white font-semibold">Pending Orders</h3>
          <h2 className="text-3xl text-white">{overviewData.pendingOrders}</h2>
          <Link
            to="/dashboard/new-orders"
            className="text-orange-400 hover:underline mt-3"
          >
            View Pending Orders
          </Link>
        </motion.div>

        {/* Processing Orders */}
        <motion.div
          className="stat-card bg-background rounded-lg shadow-lg p-6 flex flex-col items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <PackageCheck className="text-3xl text-yellow-500 mb-4" />
          <h3 className="text-lg text-white font-semibold">
            Processing Orders
          </h3>
          <h2 className="text-3xl text-white">
            {overviewData.processingOrders}
          </h2>
          <Link
            to="/dashboard/process-orders"
            className="text-yellow-500 hover:underline mt-3"
          >
            View Processing Orders
          </Link>
        </motion.div>
      </div>

      {/* User Management Section */}
      <div className="user-management-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
        {/* Users */}
        <motion.div
          className="stat-card bg-background rounded-lg shadow-lg p-6 flex flex-col items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <BarChart className="text-3xl text-green-400 mb-4" />
          <h3 className="text-lg text-white font-semibold">Total Users</h3>
          <h2 className="text-3xl text-white">{overviewData.users}</h2>
          <Link
            to="/dashboard/users-control"
            className="text-green-400 hover:underline mt-3"
          >
            View Users
          </Link>
        </motion.div>
      </div>

      {/* Earnings & Financial Section */}
      <div className="earnings-section grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
        {/* Earnings */}
        <motion.div
          className="stat-card bg-background rounded-lg shadow-lg p-6 flex flex-col items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Wallet className="text-3xl text-purple-400 mb-4" />
          <h3 className="text-lg text-white font-semibold">Total Earnings</h3>
          <h2 className="text-3xl text-white">${overviewData.earnings}</h2>
          <Link
            to="/dashboard/earnings"
            className="text-purple-400 hover:underline mt-3"
          >
            View Earnings
          </Link>
        </motion.div>
      </div>

      
    </div>
  );
};

export default Overview;
