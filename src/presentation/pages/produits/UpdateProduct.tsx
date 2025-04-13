
import { ArrowLeft } from 'react-bootstrap-icons'
import Input from '../../components/Input'
import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
// import Product from '../../../data/models/Product';
// import useProducts from '../../hook/products/useProducts';
// import productSave from '../../hook/products/useProductSave'
import { STRING_ROUTE_CATEGORIE } from '../../utils/const';
import useProductUpdate from '../../hook/products/useProductUpdate'



import useCategories from '../../hook/categories/useCategories'
import ProductResponse from '../../../data/models/ProductResponse';
import Button from '../../components/Button';

// import { ArrowLeft } from 'react-bootstrap-icons'
// import Input from '../../components/Input'
// import Button from '../../components/Button'


const UpdateProduct = ({initialData}:{initialData:ProductResponse}) => {
console.log(initialData);
  const { setValue } = useForm();
  //importer categories
const { catQuery } = useCategories();
  const { data: allCategories } = catQuery;
  const categories = allCategories || [];
  //images
 
  
  useEffect(() => {
    console.log("initialData",initialData)
    if (initialData) {
      setValue("id", initialData.id||null);
      setValue("marque", initialData.marque || "");
      setValue("description", initialData.description);
      setValue("quantite", initialData.quantite || 0);
      setValue("prixachat", initialData.prixachat  || 0);
      setValue("prix_vente", initialData.prix_vente  || 0);
    }
  }, [initialData, setValue]);

  const navigate = useNavigate();
  const { register, handleSubmit, onSubmit, errors, isCreating } =useProductUpdate();
  return (

  <div className="fixed mt-16 inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
     <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
       <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" aria-hidden="true"></div>
 
       <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
 
       <div className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
         <div className="px-4 pt-5 pb-4  bg-white sm:p-6 sm:pb-4">
           {/* Crois en haut à gauche pour fermer */}
           <button
             onClick={()=>navigate (STRING_ROUTE_CATEGORIE)}
             className="absolute text-gray-500 top-2 right-2 hover:text-gray-700"
           >
             <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
             </svg>
           </button>
 
           <h1 className="text-3xl font-bold text-center text-primaryColor"> Modifier un Produit</h1>
 
           <form
             onSubmit={handleSubmit(onSubmit)}
             className="z-20 w-2/4 p-6 mx-auto space-y-4 bg-white sm:w-full"
           >
          <input
           type="number"
           {...register("id",  { valueAsNumber: true })}
            className='hidden'
          value={initialData.id}
           />
 
         <div className="mb-4">
             <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                 Titre de la catégorie
             </label>
             <Input
                 type="text"
                 {...register("marque", { required: "Le titre de la catégorie est requis." })}
                 placeholder="marque du produit"
            
             />
             {errors.marque?.message && (
                 <p className="text-sm text-red-500">{String(errors.marque.message)}</p>
             )}
         </div>
         <div className="mb-4">
             <label>Description</label>
             <Input
                 type="text"
                 {...register("description", { required: "La description du produit est requise." })}
                 placeholder="Description du produit"
             
             />
             {errors.description?.message && (
                 <p className="text-sm text-red-500">{String(errors.description.message)}</p>
             )}
           </div>

           <div className="mb-4">
             <label>Description</label>
             <Input
                 type="number"
                 {...register("quantite", { required: "La quantite du produit est requise." })}
                 placeholder="marque du produit"
         
             />
             {errors.quantite?.message && (
                 <p className="text-sm text-red-500">{String(errors.quantite.message)}</p>
             )}
           </div>

           <div className="mb-4">
             <label>Description</label>
             <Input
                 type="number"
                 {...register("prixachat", { required: "Le prix d'achat du produit est requis." })}
                 placeholder="prix d'achat"
                
             />
             {errors.prixachat?.message && (
                 <p className="text-sm text-red-500">{String(errors.prixachat.message)}</p>
             )}
           </div>
           <div className="mb-4">
             <label>Description</label>
             <Input
                 type="number"
                 {...register("prix_vente", { required: "Le prix de vente du produit est requis." })}
                 placeholder="prix de vente"
                 value={initialData.prix_vente}
             />
             {errors.prix_vente?.message && (
                 <p className="text-sm text-red-500">{String(errors.prix_vente.message)}</p>
             )}
           </div>
           <div className="mb-4">
             <label>Description</label>
             <select
            {...register("categorie_id", { required: "La catégorie est obligatoire" })}
            name="categorie_id"
            id="categorie"
            className="p-2 m-4 border border-gray-500 rounded-lg"
           
          >
            <option value="">-- Sélectionner une catégorie --</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.intitule}
              </option>
            ))}
          </select>
           </div>
           <Button>Update</Button>
           </form>
         </div>
       </div>
     </div>
   </div>
   )
}


export default UpdateProduct