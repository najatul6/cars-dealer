import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Overview = () => {
  const [overviewData, setOverviewData] = useState({
    orders: 0,
    wishlist: 0,
    tickets: 0,
    profileComplete: false,
  });

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    // Fetching data from API
    const fetchOverviewData = async () => {
      try {
        const response = await axiosSecure.get("/user/overview"); // Example API endpoint
        setOverviewData(response.data);
      } catch (error) {
        console.error("Error fetching overview data:", error);
      }
    };

    fetchOverviewData();
  }, [axiosSecure]); // The dependency array ensures this runs once when the component mounts

  return (
    <div className="py-4">
      <div className="overview-header flex justify-between items-center py-4 ">
        <h2 className="text-2xl font-bold text-white">Dashboard Overview</h2>
      </div>

      <div className="overview-stats grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  py-4">
        <motion.div
          className="stat-card bg-background2 rounded-lg shadow-lg p-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-sm text-gray-400">Orders</h3>
          <h2 className="text-xl text-white font-semibold">
            {overviewData.orders}
          </h2>
          <Link
            to="/dashboard/my-orders"
            className="text-baseColor hover:underline"
          >
            View Orders
          </Link>
        </motion.div>

        <motion.div
          className="stat-card bg-background2 rounded-lg shadow-lg p-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-sm text-gray-400">Wishlist</h3>
          <h2 className="text-xl text-white font-semibold">
            {overviewData.wishlist}
          </h2>
          <Link
            to="/dashboard/wishlist"
            className="text-baseColor hover:underline"
          >
            View Wishlist
          </Link>
        </motion.div>

        <motion.div
          className="stat-card bg-background2 rounded-lg shadow-lg p-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-sm text-gray-400">Support Tickets</h3>
          <h2 className="text-xl text-white font-semibold">
            {overviewData.tickets}
          </h2>
          <Link
            to="/dashboard/support-tickets"
            className="text-baseColor hover:underline"
          >
            View Tickets
          </Link>
        </motion.div>
      </div>

      <div className="recent-activity bg-background2 rounded-lg shadow-lg p-6 mt-6">
        <h3 className="text-lg font-semibold text-white mb-4">
          Recent Activity
        </h3>
        <ul>
          {/* Display a list of recent activity */}
          <motion.li
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="activity-item text-white mb-2"
          >
            <span className="text-baseColor">Order #12345</span> - Completed on
            Feb 25
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="activity-item text-white mb-2"
          >
            <span className="text-baseColor">Wishlist Item</span> - Added on Feb
            24
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="activity-item text-white mb-2"
          >
            <span className="text-baseColor">Support Ticket #345</span> - Opened
            on Feb 23
          </motion.li>
        </ul>
      </div>

      <div className="profile-completion mt-6 p-4 bg-background2 rounded-lg shadow-lg">
        <h3 className="text-sm text-gray-400">Profile Completion</h3>
        <div className="progress-bar mt-2 bg-gray-200 rounded-lg h-2.5 w-full">
          <div
            className="progress-fill bg-baseColor h-full"
            style={{ width: overviewData.profileComplete ? "100%" : "60%" }}
          ></div>
        </div>
        <p className="mt-2 text-white text-sm">
          {overviewData.profileComplete
            ? "Your profile is complete"
            : "Complete your profile for full access"}
        </p>
      </div>
    </div>
  );
};

export default Overview;
