import React from 'react'
import { ArrowLeft } from 'react-bootstrap-icons'
import Input from '../../components/Input'
import Button from '../../components/Button'
import useCategories from '../../hook/categories/useCategories'
import productSave from '../../hook/products/useProductSave'

const AddProduct = () => {
const { catQuery } = useCategories();
  const { data: allCategories } = catQuery;
  const categories = allCategories || [];
  
  const [images, setImages] = React.useState([]);
  console.log(images);
  const handleImageChange = (event) => {
    const newImage = event.target.files[0]; // Récupérer l'image sélectionnée
    if (newImage) {
        setImages([...images, newImage]); // Ajouter la nouvelle image à la liste
    }
  };
  
  const removeImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
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

        <div className=' space-x-3 mr-16'>
          <button className='btn_save'>Liste des articles</button>
          
        </div>
      </div>
    </div>
    <hr className='mt-4 border  border-black bg-blue-500' />

    <div className='mt-8  rounded-lg border border-white shadow-lg '>
      <h2 className='text-2xl m-4 font-sans font-bold ml-8'>Information Du Produit</h2>
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
            <Input type="file" {...register("image")} onChange={handleImageChange} // Gère la sélection d'une image
           accept="image/*"  />
        </div>

        <div  className='space-x-2 flex'>
             {images.map((image, index) => (
            <div key={index} className='space-x-2'>
                <span>{image.name}</span>
                <button type="button" onClick={() => removeImage(index)} className='bg-blue-600 text-white rounded-lg p-2 text-sm'>X</button>
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
            <Input type="number"  {...register("prix_achat")} />
            {errors.prix_achat?.message && <p className="text-sm text-red-500">{errors.prix_achat.message}</p>}
          </div>
          <div>
            <label htmlFor="">Prix de vente</label>
            <Input type="number" {...register("prix_vente")} />
            {errors.prix_vente?.message && <p className="text-sm text-red-500">{errors.prix_vente.message}</p>}
          </div>
          <div className='space-x-3 flex flex-col'>
          <label htmlFor="">Categorie</label>
          <select name="categorie" id="categorie" className='p-2 m-4 border border-gray-500 rounded-lg'>
            <option value="" {...register("categorie_id")}>-- Sélectionner une catégorie --</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.intitule}
              </option>
            ))}
          </select>
          </div>
          <Button>Save</Button>
        </form>
      </div>
    </div>
  </>
   )
}

export default AddProduct