import { useState } from "react";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const SupportTickets = () => {
  const axiosSecure = useAxiosSecure();
  const [tickets, setTickets] = useState([
    { id: 1, title: "Issue with Payment", status: "Open" },
    { id: 2, title: "Bug in Dashboard", status: "In Progress" },
  ]);

  const [newTicket, setNewTicket] = useState("");

  const handleAddTicket = () => {
    if (newTicket.trim()) {
      setTickets([...tickets, { id: Date.now(), title: newTicket, status: "Open" }]);
      setNewTicket("");
    }
  };

  const handleDeleteTicket = (id) => {
    setTickets(tickets.filter((ticket) => ticket.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-white mb-4">Support Tickets</h2>
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
          <div key={ticket.id} className="bg-gray-900 text-white p-4 flex justify-between items-center rounded">
            <div>
              <h3 className="text-lg font-semibold">{ticket.title}</h3>
              <p className="text-sm text-gray-400">Status: {ticket.status}</p>
            </div>
            <div className="flex gap-2">
              <button className="bg-blue-500 hover:bg-blue-600 p-2 rounded">
                <FaEdit />
              </button>
              <button onClick={() => handleDeleteTicket(ticket.id)} className="bg-red-500 hover:bg-red-600 p-2 rounded">
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
