import useProducts from '../../hook/products/useProducts'
import { Pencil, Trash, Trash2 } from 'react-bootstrap-icons';
import { PenFill } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
// import Button from '../../components/Button';
const ListProduit = () => {
  const { prodQuery } = useProducts();
  const { data: allCategories } = prodQuery;
  const products = allCategories || [];
  const navigate = useNavigate();
  return (
    <div className="mt-32">
      <table className='text-center  w-[90%]'>
        <thead className=''>
          <tr className=''>
            <th className='text-center m-5 space-x-8'>Marque</th>
            <th className='text-center m-5 space-x-8'>Description</th>
            <th className='text-center m-5 space-x-8'>utiliateur</th>
            <th>Categorie</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
    <tbody>

      {products!.map((product)=>(
        <tr key={product.id}>
          <td>
            {product.marque}
          </td>
          <td>
            {product.description}
          </td>
          <td>
            {product.user.nom}
          </td>
          <td>
            {product.categorie.intitule}
          </td>

          <td>
          <button
             onClick={() => navigate(`/ProductEdit/${product.id}`)}>
                 <Pencil className="w-4 h-4" />
          </button>

          </td>
          <td>
          <button 
                          onClick={() => navigate(`/productDelete/${product.id}`)} className='text-red-800 text-2xl'>
                          <Trash className="w-4 h-4" />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
        
      </table>
    </div>
  )
}

export default ListProduit