import { useState, useEffect } from "react";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import useAuth from "../../../Hooks/useAuth"; // Hook to get user info
import useRole from "../../../Hooks/useRole"; // Hook to get user role

const CustomerSupport = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth(); // Get logged-in user info
  const [tickets, setTickets] = useState([]);
  const [newTicket, setNewTicket] = useState("");
  const [userRole] = useRole(); // Get user role

  // Fetch tickets
  useEffect(() => {
    if (user?.email) {
      const fetchTickets = async () => {
        try {
          // Admins get all tickets, users get only their own
          const url = userRole === "admin" ? `/supportTickets` : `/supportTickets?email=${user.email}`;
          const res = await axiosSecure.get(url);
          setTickets(res.data);
        } catch (error) {
          toast.error("Failed to fetch tickets");
        }
      };
      fetchTickets();
    }
  }, [axiosSecure, user?.email, userRole]);

  // Add a new ticket
  const handleAddTicket = async () => {
    if (newTicket.trim() && user?.email) {
      try {
        const res = await axiosSecure.post("/supportTickets", {
          title: newTicket,
          status: "Open",
          email: user.email, // Attach user email
        });

        if (res.data.insertedId) {
          setTickets([...tickets, { _id: res.data.insertedId, title: newTicket, status: "Open", email: user.email }]);
          setNewTicket("");
          toast.success("Ticket added successfully");
        }
      } catch (error) {
        toast.error("Failed to add ticket");
      }
    }
  };

  // Delete a ticket
  const handleDeleteTicket = async (id) => {
    try {
      const res = await axiosSecure.delete(`/supportTickets/${id}`);
      if (res.data.deletedCount > 0) {
        setTickets(tickets.filter((ticket) => ticket._id !== id));
        toast.success("Ticket deleted successfully");
      }
    } catch (error) {
      toast.error("Failed to delete ticket");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-white mb-4">{userRole === "admin" ? "All Support Tickets" : "My Support Tickets"}</h2>
      
      {/* Only show ticket input for normal users */}
      {userRole !== "admin" && (
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newTicket}
            onChange={(e) => setNewTicket(e.target.value)}
            className="p-2 rounded bg-gray-800 text-white w-full"
            placeholder="Enter ticket title..."
          />
          <button onClick={handleAddTicket} className="bg-green-500 hover:bg-green-600 p-2 rounded">
            <FaPlus />
          </button>
        </div>
      )}

      <div className="grid gap-4">
        {tickets.map((ticket) => (
          <div key={ticket._id} className="bg-gray-900 text-white p-4 flex justify-between items-center rounded">
            <div>
              <h3 className="text-lg font-semibold">{ticket.title}</h3>
              <p className="text-sm text-gray-400">Status: {ticket.status}</p>
              {userRole === "admin" && <p className="text-xs text-gray-500">User: {ticket.email}</p>}
            </div>
            <div className="flex gap-2">
              <button className="bg-blue-500 hover:bg-blue-600 p-2 rounded">
                <FaEdit />
              </button>
              <button onClick={() => handleDeleteTicket(ticket._id)} className="bg-red-500 hover:bg-red-600 p-2 rounded">
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerSupport;
