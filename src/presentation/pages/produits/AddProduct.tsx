import React from 'react'
import { ArrowLeft } from 'react-bootstrap-icons'
import Input from '../../components/Input'
import Button from '../../components/Button'
import useCategories from '../../hook/categories/useCategories'
import productSave from '../../hook/products/useProductSave'

const AddProduct = () => {
const { catQuery } = useCategories();
  const { data: allCategories } = catQuery;
  const categories = allCategories || [];



  const [images, setImages] = React.useState([]);
 
  const handleImageChange = (event) => {
    const files = Array.from(event.target.files); // Convertir FileList en tableau
    if (files.length > 0) {
      const newImages = [...images, ...files];
      setImages(newImages);
      setValue("images", newImages); // Enregistre la liste dans react-hook-form
    }
  };
  const removeImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    setValue("images", updatedImages); // Met à jour react-hook-form
  };
  
  const { register, setValue, handleSubmit, onSubmit, errors, isCreating } =productSave();
  return (

 
  <>
    <div className='mt-20'>
      <div>
        <a href="#" className='flex items-center space-x-3'><ArrowLeft /> Retour</a>
      </div>
      <div className='flex justify-between mt-4'>
        <h2 className='text-2xl font-bold'>Ajouter un article</h2>

        <div className='mr-16 space-x-3 '>
          <button className='btn_save'>Liste des articles</button>
          
        </div>
      </div>
    </div>
    <hr className='mt-4 bg-blue-500 border border-black' />

    <div className='mt-8 border border-white rounded-lg shadow-lg '>
      <h2 className='m-4 ml-8 font-sans text-2xl font-bold'>Information Du Produit</h2>
      <div className="w-[70%] m-4 p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="">Marque</label>
            <Input type="text"  {...register("marque")} />
            {errors.marque?.message && <p className="text-sm text-red-500">{errors.marque.message}</p>}
          </div>
          <div>
            <label htmlFor="">Description</label>
            <Input type="text"  {...register("description")} />
            {errors.description?.message && <p className="text-sm text-red-500">{errors.description.message}</p>}
          </div>
                    
          
         <div>
          <Input
            type="file"
            accept="images/*"
            multiple
            onChange={handleImageChange}
          />
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {images.map((image, index) => (
            <div key={index} className="flex items-center gap-2 p-2 bg-gray-100 rounded-md">
              <span className="text-sm">{image.name}</span>
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="p-1 text-white bg-red-500 rounded-full"
              >
                X
              </button>
            </div>
          ))}
        </div>


          <div>
            <label htmlFor="">Quantite</label>
            <Input type="number" {...register("quantite")} />
            {errors.quantite?.message && <p className="text-sm text-red-500">{errors.quantite.message}</p>}
          </div>
          <div>
            <label htmlFor="">Prix d'achat</label>
            <Input type="number"  {...register("prixachat")} />
            {errors.prixachat?.message && <p className="text-sm text-red-500">{errors.prixachat.message}</p>}
          </div>
        
          <div>
            <label htmlFor="">Prix de vente</label>
            <Input type="number" {...register("prix_vente")} />
            {errors.prix_vente?.message && <p className="text-sm text-red-500">{errors.prix_vente.message}</p>}
          </div>
          <div className='flex flex-col space-x-3'>
          <label htmlFor="">Categorie</label>
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

          {errors.categorie_id && (
            <p className="text-sm text-red-500">{errors.categorie_id.message}</p>
          )}
          </div>
          <Button>Save</Button>
        </form>
      </div>
    </div>
  </>
   )
}


export default AddProduct