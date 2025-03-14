import { useState, useEffect } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import useAuth from "../../../Hooks/useAuth";

const SupportTickets = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth(); 
  const [tickets, setTickets] = useState([]);
  const [newTicket, setNewTicket] = useState("");

  // Fetch tickets for the logged-in user
  useEffect(() => {
    if (user?.email) {
      const fetchTickets = async () => {
        try {
          const res = await axiosSecure.get(`/supportTickets?email=${user.email}`);
          setTickets(res.data);
        } catch (error) {
          toast.error("Failed to fetch tickets");
        }
      };
      fetchTickets();
    }
  }, [axiosSecure, user?.email]);

  // Add a new ticket with the user's email
  const handleAddTicket = async () => {
    if (newTicket.trim() && user?.email) {
      try {
        const res = await axiosSecure.post("/supportTickets", {
          title: newTicket,
          status: "Open",
          email: user.email, // Store user's email
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
      <h2 className="text-2xl font-bold text-white mb-4">My Support Tickets</h2>
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
      <div className="grid gap-4">
        {tickets.map((ticket) => (
          <div key={ticket._id} className="bg-gray-900 text-white p-4 flex justify-between items-center rounded">
            <div>
              <h3 className="text-lg font-semibold">{ticket.title}</h3>
              <p className="text-sm text-gray-400">Status: {ticket.status}</p>
            </div>
            <div className="flex gap-2">
              
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

export default SupportTickets;
