import { useState } from 'react';
import useProducts from '../../hook/products/useProducts'
import { Pencil, Trash, Trash2 } from 'react-bootstrap-icons';
import { PenFill } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
// import Button from '../../components/Button';  


const ListProduit = ({ totalPages }: { totalPages: number }) => {
  const [currentPage, setCurrentPage] = useState(1);

const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
    }
};
  const { prodQuery } = useProducts();
  const { data: allCategories } = prodQuery;
  const products = allCategories || [];
  const navigate = useNavigate();
  return (
    <div className="mt-32">
      <table className='table-auto border-collapse border border-gray-300 w-full'>
        <thead className=''>
          <tr className='bg-gray-100'>
            <th className='w-1/3 border border-gray-300 px-4 py-2'>Marque</th>
            <th className='w-1/3 border border-gray-300 px-4 py-2'>Description</th>
            <th className='w-1/3 border border-gray-300 px-4 py-2'>utiliateur</th>
            <th className='w-1/3 border border-gray-300 px-4 py-2'>Categorie</th>
            <th colSpan={2} className='w-1/3 border border-gray-300 px-4 py-2'>Action</th>
          </tr>
        </thead>
    <tbody>

      {products!.map((product)=>(
        <tr key={product.id} className='border border-gray-300 px-4 py-2'>
          <td className='border border-gray-300 px-4 py-2'>
            {product.marque}
          </td>
          <td className='border border-gray-300 px-4 py-2'>
            {product.description}
          </td>
          <td className='border border-gray-300 px-4 py-2'>
            {product.user.nom}
          </td>
          <td className='border border-gray-300 px-4 py-2'>
            {product.categorie.intitule}
          </td>

          <td className='border border-gray-300 px-4 py-2'>
          <button
             onClick={() => navigate(`/ProductEdit/${product.id}`)} className='btn btn-red'>
                 <Pencil className="w-4 h-4" />
          </button>

          </td>
          <td className='border border-gray-300 px-4 py-2'>
          <button 
            onClick={() => navigate(`/productDelete/${product.id}`)} className='text-red-800 text-2xl btn'>
            <Trash  />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
        
      </table>

      <div className="flex justify-center mt-4 space-x-2">
            <button 
                className={`px-3 py-2 rounded ${currentPage === 1 ? "bg-gray-300" : "bg-gray-200 hover:bg-gray-300"}`}
                disabled={currentPage === 1}
                onClick={() => goToPage(currentPage - 1)}
            >
                Précédent
            </button>

            {/* Affiche première page */}
            <button 
                className={`px-3 py-2 rounded ${currentPage === 1 ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
                onClick={() => goToPage(1)}
            >
                1
            </button>

            {/* Affiche ... entre la première et l’actuelle */}
            {currentPage > 3 && <span className="px-3 py-2">...</span>}

            {/* Affiche la page actuelle */}
            {currentPage > 2 && currentPage < totalPages - 1 && (
                <button className="px-3 py-2 bg-blue-500 text-white rounded">{currentPage}</button>
            )}

            {/* Affiche ... entre l’actuelle et la dernière */}
            {currentPage < totalPages - 2 && <span className="px-3 py-2">...</span>}

            {/* Affiche dernière page */}
            <button 
                className={`px-3 py-2 rounded ${currentPage === totalPages ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
                onClick={() => goToPage(totalPages)}
            >
                {totalPages}
            </button>

            <button 
                className={`px-3 py-2 rounded ${currentPage === totalPages ? "bg-gray-300" : "bg-gray-200 hover:bg-gray-300"}`}
                disabled={currentPage === totalPages}
                onClick={() => goToPage(currentPage + 1)}
            >
                Suivant
            </button>
        </div>
    </div>
  )
}

export default ListProduit