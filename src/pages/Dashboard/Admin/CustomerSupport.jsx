import useTicket from "../../../Hooks/useTicket";
import { FaTrash, FaEdit } from "react-icons/fa";
import { motion } from "framer-motion";
import Swal from "sweetalert2"; // Import SweetAlert2
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";

const CustomerSupport = () => {
  const [ticket, refetch] = useTicket();
  const axiosSecure = useAxiosSecure();

  // Handle updating ticket status
  const handleUpdateStatus = (ticketId, currentStatus) => {
    Swal.fire({
      title: "Update Ticket Status",
      input: "select",
      inputOptions: {
        "Open": "Open",
        "In Progress": "In Progress",
        "Resolved": "Resolved",
      },
      inputPlaceholder: "Select a status",
      showCancelButton: true,
      confirmButtonText: "Update",
      cancelButtonText: "Cancel",
      inputValue: currentStatus, // preselect current status
    }).then(async (result) => {
      if (result.isConfirmed) {
        const updatedStatus = result.value;

        try {
          // API call to update the ticket status
          await axiosSecure.put(`/supportTickets/${ticketId}`, { status: updatedStatus });

          // Refetch tickets to reflect updated data
          refetch();

          Swal.fire({
            icon: "success",
            title: "Status Updated",
            text: `Ticket status has been updated to ${updatedStatus}.`,
          });
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Failed to Update",
            text: "There was an error updating the ticket status. Please try again.",
          });
        }
      }
    });
  };

   // Delete a ticket
    const handleDeleteTicket = async (id) => {
      try {
        const res = await axiosSecure.delete(`/supportTickets/${id}`);
        if (res.data.deletedCount > 0) {
            refetch();
          toast.success("Ticket deleted successfully");
        }
      } catch (error) {
        toast.error("Failed to delete ticket");
      }
    };

  return (
    <div className="p-4">
      <motion.h2
        className="text-2xl font-bold text-white mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        All Support Tickets
      </motion.h2>

      <motion.div
        className="grid gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {ticket.map((ticket) => (
          <motion.div
            key={ticket._id}
            className="bg-gray-900 text-white p-4 flex justify-between items-center rounded"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div>
              <h3 className="text-lg font-semibold">{ticket.title}</h3>
              <p className="text-sm text-gray-400">Status: {ticket.status}</p>
              <p className="text-xs text-gray-500">User: {ticket.email}</p>
            </div>
            <div className="flex gap-2">
              <motion.button
                className="bg-blue-500 hover:bg-blue-600 p-2 rounded"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleUpdateStatus(ticket._id, ticket.status)} // Trigger status update on click
              >
                <FaEdit />
              </motion.button>
              <motion.button
                onClick={() => handleDeleteTicket(ticket._id)}
                className="bg-red-500 hover:bg-red-600 p-2 rounded"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTrash />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CustomerSupport;
