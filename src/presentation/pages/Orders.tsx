import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faPlus, faSearch, faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Orders = () => {
    // Exemple de données
    const orders = [
        { id: "#12345", date: "2025-03-31", customer: "John Doe", paymentStatus: "Paid", orderStatus: "Processing", total: "$500.00" },
        { id: "#12346", date: "2025-03-30", customer: "Jane Smith", paymentStatus: "Pending", orderStatus: "Pending", total: "$300.00" },
        { id: "#12347", date: "2025-03-29", customer: "Alex Johnson", paymentStatus: "Paid", orderStatus: "Completed", total: "$150.00" },
        // Ajoutez autant de données que nécessaire
    ];

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2;

    const totalPages = Math.ceil(orders.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentOrders = orders.slice(startIndex, startIndex + itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="p-4 border-b bg-gray-100 relative mt-12">
            {/* Ligne supérieure : Titre, boutons Export et Add Orders */}
            <div className="flex items-center justify-between mb-4">
                {/* Titre */}
                <h1 className="text-xl font-bold text-gray-800">Orders</h1>
                {/* Boutons Export et Add Orders */}
                <div className="flex space-x-3">
                    <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50">
                        Export
                    </button>
                    <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
                        <FontAwesomeIcon icon={faPlus} /> Add Orders
                    </button>
                </div>
            </div>

            {/* Ligne inférieure : Select option, champ de recherche */}
            <div className="flex items-center justify-between mb-4">
                {/* Section gauche : Select option et champ de recherche */}
                <div className="flex items-center space-x-3">
                    <select
                        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="option1">Filter</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                    <div className="relative">
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
                        />
                        <input
                            type="text"
                            placeholder="Rechercher..."
                            className="pl-10 p-2 border border-gray-300 rounded w-60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
            </div>

            {/* Tableau des commandes */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded">
                    {/* En-tête du tableau */}
                    <thead>
                        <tr className="bg-gray-100 text-left text-gray-700">
                            <th className="p-3">
                                <input type="checkbox" className="w-5 h-5" />
                            </th>
                            <th className="p-3">Order</th>
                            <th className="p-3">Date</th>
                            <th className="p-3">Customer</th>
                            <th className="p-3">Payment Status</th>
                            <th className="p-3">Order Status</th>
                            <th className="p-3">Total</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>

                    {/* Corps du tableau */}
                    <tbody>
                        {currentOrders.map((order, index) => (
                            <tr key={index} className="border-t hover:bg-gray-50">
                                <td className="p-3">
                                    <input type="checkbox" className="w-5 h-5" />
                                </td>
                                <td className="p-3">{order.id}</td>
                                <td className="p-3">{order.date}</td>
                                <td className="p-3">{order.customer}</td>
                                <td className="p-3 text-green-600">{order.paymentStatus}</td>
                                <td className="p-3 text-yellow-600">{order.orderStatus}</td>
                                <td className="p-3">{order.total}</td>
                                <td className="p-3 flex space-x-3">
                                    <button className="text-blue-600 hover:text-blue-800">
                                        <FontAwesomeIcon icon={faEdit} />
                                    </button>
                                    <button className="text-red-600 hover:text-red-800">
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4">
                <button
                    className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-100"
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <span className="text-gray-600">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-100"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                >
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    );
};

export default Orders;
