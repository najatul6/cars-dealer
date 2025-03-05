import useAllUser from "../../../Hooks/useAllUser";
import { useState } from "react";
import Swal from "sweetalert2";

const UsersControl = () => {
    const [users, refetch, isLoading] = useAllUser();
    const [search, setSearch] = useState("");

    const handleEdit = (user) => {
        Swal.fire("Edit User", `Editing user: ${user.name}`, "info");
    };

    const handleUpdate = (user) => {
        Swal.fire("Update User", `Updating user: ${user.name}`, "success");
    };

    const handleDelete = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: `You are about to delete ${user.name}. This action cannot be undone!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Deleted!", "The user has been removed.", "success");
            }
        });
    };

    const filteredUsers = users?.filter(user => 
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-6 bg-gray-900 rounded-lg text-white">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">User Management</h2>
                <input 
                    type="text" 
                    placeholder="Search users..." 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                    className="w-64 bg-gray-800 text-white border-gray-700 p-2 rounded"
                />
            </div>
            <div className="overflow-x-auto rounded-lg">
                <table className="w-full border border-gray-700 text-left">
                    <thead className="bg-gray-800">
                        <tr>
                            <th className="p-2">ID</th>
                            <th className="p-2">Name</th>
                            <th className="p-2">Email</th>
                            <th className="p-2">Role</th>
                            <th className="p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading ? (
                            [...Array(5)].map((_, i) => (
                                <tr key={i}>
                                    <td className="p-2 bg-gray-700 animate-pulse">&nbsp;</td>
                                    <td className="p-2 bg-gray-700 animate-pulse">&nbsp;</td>
                                    <td className="p-2 bg-gray-700 animate-pulse">&nbsp;</td>
                                    <td className="p-2 bg-gray-700 animate-pulse">&nbsp;</td>
                                    <td className="p-2 bg-gray-700 animate-pulse">&nbsp;</td>
                                </tr>
                            ))
                        ) : (
                            filteredUsers?.map(user => (
                                <tr key={user.id} className="border-t border-gray-700">
                                    <td className="p-2">{user.id}</td>
                                    <td className="p-2">{user.name}</td>
                                    <td className="p-2">{user.email}</td>
                                    <td className="p-2">{user.role}</td>
                                    <td className="p-2">
                                        <button 
                                            className="px-3 py-1 bg-blue-600 rounded mr-2"
                                            onClick={() => handleEdit(user)}
                                        >Edit</button>
                                        <button 
                                            className="px-3 py-1 bg-green-600 rounded mr-2"
                                            onClick={() => handleUpdate(user)}
                                        >Update</button>
                                        <button 
                                            className="px-3 py-1 bg-red-600 rounded"
                                            onClick={() => handleDelete(user)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersControl;
