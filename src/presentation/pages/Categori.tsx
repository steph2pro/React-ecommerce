import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
function Categorie() {
    const [categories, setCategories] = useState([
        { id: 1, name: "Catégorie 1", image: "public/assets/img.png" },
        { id: 2, name: "Electronique", image: "public/assets/img.png" },
        { id: 2, name: "Materiel", image: "public/assets/img.png" },


    ]);
    const [newCategoryName, setNewCategoryName] = useState("");
    const [newCategoryImage, setNewCategoryImage] = useState(null);
    const [showForm, setShowForm] = useState(false);

    const handleAddCategory = () => {
        if (newCategoryName.trim() !== "" && newCategoryImage) {
            const newCategory = {
                id: categories.length + 1,
                name: newCategoryName,
                image: URL.createObjectURL(newCategoryImage),
            };
            setCategories([...categories, newCategory]);
            setNewCategoryName("");
            setNewCategoryImage(null);
            setShowForm(false); // Masquer le formulaire après l'ajout
        }
    };

    return (
        <div>
            {/* En-tête */}
            <div className="p-4 border-b bg-gray-100 flex items-center justify-between mt-12 ">
                <h1 className="text-xl font-bold text-gray-800">Categorie</h1>
                <button
                    className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                    onClick={() => setShowForm(!showForm)}
                >
                    <FontAwesomeIcon icon={faPlus} /> Add Categorie
                </button>
            </div>

            {/* Formulaire pour créer une catégorie */}
            {showForm && (
                <div className="p-4">
                    <input
                        type="text"
                        value={newCategoryName}
                        onChange={(e) => setNewCategoryName(e.target.value)}
                        className="p-2 border rounded"
                        placeholder="Enter category name"
                    />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                                setNewCategoryImage(e.target.files[0]);
                            }
                        }}
                        className="p-2 border rounded ml-2"
                    />
                    <button
                        className="ml-2 px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700"
                        onClick={handleAddCategory}
                    >
                        Save
                    </button>
                </div>
            )}

            {/* Liste des catégories */}
            <div className="p-4 grid grid-cols-3 gap-4">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className="border rounded-lg overflow-hidden shadow-sm text-center relative group"
                    >
                        <img
                            src={category.image}
                            alt={category.name}
                            className="w-full h-32 object-cover"
                        />
                        <p className="p-2 text-gray-800 font-semibold">{category.name}</p>
                        {/* Icônes affichées au survol */}
                        <div className="absolute inset-0 flex items-center justify-center space-x-4 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="text-white p-2 bg-gray-700 rounded hover:bg-gray-600">
                                <FontAwesomeIcon icon={faEdit} />
                            </button>
                            <button className="text-white p-2 bg-red-600 rounded hover:bg-red-500">
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categorie;
