import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch, faEdit, faTrash, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Coupon = () => {
    const [showTable, setShowTable] = useState(false); // Contrôle de l'affichage du tableau
    const [currentPage, setCurrentPage] = useState(1); // État pour la page actuelle
    const itemsPerPage = 5; // Nombre d'éléments par page

    const coupons = [
        { id: 1, name: "Spring Sale", usage: 120, status: "Active" },
        { id: 2, name: "Summer Discount", usage: 80, status: "Expired" },
        { id: 3, name: "Winter Promo", usage: 200, status: "Active" },
        { id: 4, name: "Autumn Festival", usage: 50, status: "Active" },
        { id: 5, name: "New Year Deal", usage: 300, status: "Expired" },
        { id: 6, name: "Holiday Offer", usage: 180, status: "Active" },
        { id: 7, name: "Flash Discount", usage: 70, status: "Expired" },
        { id: 8, name: "Special Promotion", usage: 95, status: "Active" },
        { id: 9, name: "special domaine", usage: 97, status: "Expired" },
    ];

    // Calcul des données pour la page actuelle
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = coupons.slice(indexOfFirstItem, indexOfLastItem);

    // Nombre total de pages
    const totalPages = Math.ceil(coupons.length / itemsPerPage);

    // Gestion de la pagination
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
            {/* Ligne supérieure : Titre et bouton Add Coupon alignés sur la même ligne */}
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-bold text-gray-800">Coupon</h1>
                <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 flex items-center">
                    <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add Coupon
                </button>
            </div>

            {/* Section inférieure : Boutons All Coupons, Active Coupons, Expired Coupons */}
            <div className="flex justify-start mt-6 space-x-6">
                <button
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => setShowTable(true)} // Affiche le tableau au clic
                >
                    All Coupons
                </button>
                <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                    Active Coupons
                </button>
                <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                    Expired Coupons
                </button>
            </div>

            {/* Ligne inférieure : Select option et champ de recherche */}
            <div className="flex items-center justify-between mt-6">
                <div className="flex items-center space-x-3">
                    <select
                        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="option1">Filter</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                        <option value="option3">Option 3</option>
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

            {/* Tableau pour "All Coupons" affiché en bas avec pagination */}
            {showTable && (
                <div className="mt-6 bg-white shadow rounded">

                    <table className="min-w-full border-collapse">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="py-2 px-4 border text-left">
                                    <input type="checkbox" />
                                </th>
                                <th className="py-2 px-4 border text-left">Coupon Name</th>
                                <th className="py-2 px-4 border text-left">Usage</th>
                                <th className="py-2 px-4 border text-left">Status</th>
                                <th className="py-2 px-4 border text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((coupon) => (
                                <tr key={coupon.id} className="odd:bg-white even:bg-gray-50">
                                    <td className="py-2 px-4 border">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="py-2 px-4 border">{coupon.name}</td>
                                    <td className="py-2 px-4 border">{coupon.usage}</td>
                                    {/* Statut avec couleur conditionnelle */}
                                    <td className={`py-2 px-4 border ${coupon.status === "Active" ? "text-green-600 font-bold" : "text-red-600 font-bold"}`}>
                                        {coupon.status}
                                    </td>
                                    <td className="py-2 px-4 border">
                                        <button className="px-2 py-1 text-blue-600 hover:underline">
                                            <FontAwesomeIcon icon={faEdit} className="mr-1" />
                                        </button>
                                        <button className="px-2 py-1 text-red-600 hover:underline ml-2">
                                            <FontAwesomeIcon icon={faTrash} className="mr-1" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Pagination avec des flèches */}
                    <div className="flex items-center justify-between p-4 border-t">
                        <button
                            className={`flex items-center px-4 py-2 rounded ${currentPage === 1
                                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                                : "bg-blue-600 text-white hover:bg-blue-700"
                                }`}
                            onClick={handlePreviousPage}
                            disabled={currentPage === 1}
                        >
                            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> Previous
                        </button>
                        <span className="text-gray-700">Page {currentPage} of {totalPages}</span>
                        <button
                            className={`flex items-center px-4 py-2 rounded ${currentPage === totalPages
                                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                                : "bg-blue-600 text-white hover:bg-blue-700"
                                }`}
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                        >
                            Next <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Coupon;
