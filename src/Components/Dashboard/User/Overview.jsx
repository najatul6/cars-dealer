import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Car, LifeBuoy, Package, Star, Users } from "lucide-react";

const Overview = () => {
    return (
        <div className="p-6 space-y-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800">Dashboard Overview</h2>
            <p className="text-gray-500">Welcome back to your dashboard. Here is a summary of your activities and recent updates.</p>
          </motion.div>
    
          {/* Cards Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* My Orders */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4"
            >
              <div className="bg-red-600 text-white p-4 rounded-full">
                <Package size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">My Orders</h3>
                <p className="text-gray-500">View and manage your orders</p>
                <Link to="/dashboard/my-orders" className="text-red-600 hover:text-red-500">
                  View Orders
                </Link>
              </div>
            </motion.div>
    
            {/* Support Tickets */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4"
            >
              <div className="bg-blue-600 text-white p-4 rounded-full">
                <LifeBuoy size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Support Tickets</h3>
                <p className="text-gray-500">Check the status of your support requests</p>
                <Link to="/dashboard/support-tickets" className="text-blue-600 hover:text-blue-500">
                  View Tickets
                </Link>
              </div>
            </motion.div>
    
            {/* Reviews */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4"
            >
              <div className="bg-yellow-600 text-white p-4 rounded-full">
                <Star size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Latest Reviews</h3>
                <p className="text-gray-500">See your latest product reviews</p>
                <Link to="/dashboard/reviews" className="text-yellow-600 hover:text-yellow-500">
                  View Reviews
                </Link>
              </div>
            </motion.div>
    
            {/* Services */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4"
            >
              <div className="bg-green-600 text-white p-4 rounded-full">
                <Car size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Services</h3>
                <p className="text-gray-500">Explore available car services</p>
                <Link to="/dashboard/services" className="text-green-600 hover:text-green-500">
                  View Services
                </Link>
              </div>
            </motion.div>
    
            {/* Account Settings */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4"
            >
              <div className="bg-gray-600 text-white p-4 rounded-full">
                <Users size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Account Settings</h3>
                <p className="text-gray-500">Manage your account settings</p>
                <Link to="/dashboard/account-settings" className="text-gray-600 hover:text-gray-500">
                  Edit Settings
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      );
    };

export default Overview;
