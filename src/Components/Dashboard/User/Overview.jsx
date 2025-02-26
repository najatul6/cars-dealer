import { motion } from "framer-motion";
import { Car, LifeBuoy, MessageCircle, Package, Star } from "lucide-react";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Overview = () => {
  const [ordersCount, setOrdersCount] = useState(0);
  const [ticketsCount, setTicketsCount] = useState(0);
  const [reviewsCount, setReviewsCount] = useState(0);
  const [servicesCount, setServicesCount] = useState(0);
  const axiosSecure = useAxiosSecure();
  // Fetch all data at once when the component mounts
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Make a single secure API call to fetch all the necessary data
        const response = await axiosSecure.get("/api/dashboard/overview"); // Replace with your API endpoint

        // Destructure the data from the API response
        const { activeOrders, activeTickets, totalReviews, activeServices } =
          response.data;

        // Update the state with the data
        setOrdersCount(activeOrders);
        setTicketsCount(activeTickets);
        setReviewsCount(totalReviews);
        setServicesCount(activeServices);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="p-6 space-y-8">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-gray-800">
          Your Dashboard Overview
        </h2>
        <p className="text-lg text-gray-500">
          Stay on top of your orders, tickets, services, and reviews.
        </p>
      </motion.div>

      {/* KPIs Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Active Orders */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-xl rounded-lg p-6 flex items-center justify-between space-x-4 hover:shadow-2xl transition duration-200 ease-in-out"
        >
          <div className="bg-red-600 text-white p-4 rounded-full">
            <Package size={30} />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Active Orders</h3>
            <p className="text-gray-500">
              You have {ordersCount} active orders.
            </p>
            <a
              href="/dashboard/my-orders"
              className="text-red-600 hover:text-red-500 font-semibold"
            >
              View Orders
            </a>
          </div>
        </motion.div>

        {/* Support Tickets */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white shadow-xl rounded-lg p-6 flex items-center justify-between space-x-4 hover:shadow-2xl transition duration-200 ease-in-out"
        >
          <div className="bg-blue-600 text-white p-4 rounded-full">
            <LifeBuoy size={30} />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Support Tickets</h3>
            <p className="text-gray-500">
              You have {ticketsCount} active support tickets.
            </p>
            <a
              href="/dashboard/support-tickets"
              className="text-blue-600 hover:text-blue-500 font-semibold"
            >
              View Tickets
            </a>
          </div>
        </motion.div>

        {/* Latest Reviews */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white shadow-xl rounded-lg p-6 flex items-center justify-between space-x-4 hover:shadow-2xl transition duration-200 ease-in-out"
        >
          <div className="bg-yellow-600 text-white p-4 rounded-full">
            <Star size={30} />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Latest Reviews</h3>
            <p className="text-gray-500">
              You have {reviewsCount} new reviews.
            </p>
            <a
              href="/dashboard/reviews"
              className="text-yellow-600 hover:text-yellow-500 font-semibold"
            >
              View Reviews
            </a>
          </div>
        </motion.div>

        {/* Active Services */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white shadow-xl rounded-lg p-6 flex items-center justify-between space-x-4 hover:shadow-2xl transition duration-200 ease-in-out"
        >
          <div className="bg-green-600 text-white p-4 rounded-full">
            <Car size={30} />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Active Services</h3>
            <p className="text-gray-500">
              You have {servicesCount} active services.
            </p>
            <a
              href="/dashboard/services"
              className="text-green-600 hover:text-green-500 font-semibold"
            >
              View Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Real-Time Notifications/Updates */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="bg-white p-6 rounded-lg shadow-xl"
      >
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Real-Time Updates
        </h3>
        <div className="flex space-x-6">
          <div className="bg-blue-50 p-4 rounded-lg flex items-center justify-between shadow-md w-1/3">
            <MessageCircle size={25} className="text-blue-600" />
            <div className="ml-2">
              <p className="text-sm text-blue-600 font-semibold">New Message</p>
              <p className="text-xs text-gray-500">
                You have a new support message.
              </p>
            </div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg flex items-center justify-between shadow-md w-1/3">
            <Car size={25} className="text-yellow-600" />
            <div className="ml-2">
              <p className="text-sm text-yellow-600 font-semibold">
                Service Update
              </p>
              <p className="text-xs text-gray-500">
                Your car service is about to begin.
              </p>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg flex items-center justify-between shadow-md w-1/3">
            <Star size={25} className="text-green-600" />
            <div className="ml-2">
              <p className="text-sm text-green-600 font-semibold">
                Review Received
              </p>
              <p className="text-xs text-gray-500">
                You received a 5-star review for your service.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Overview;
