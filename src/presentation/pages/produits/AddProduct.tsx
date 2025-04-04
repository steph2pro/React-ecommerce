import React from 'react'
import { ArrowLeft } from 'react-bootstrap-icons'
import Input from '../../components/Input'
import Button from '../../components/Button'

const AddProduct = () => (
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
        <form action="">
          <div>
            <label htmlFor="">Marque</label>
            <Input type="text" />
          </div>
          <div>
            <label htmlFor="">Description</label>
            <Input type="text" />
          </div>
          <div>
            <label htmlFor="">Appercu</label>
            <Input type="file" />
          </div>

          <div>
            <label htmlFor="">Quantite</label>
            <Input type="number" />
          </div>
          <div>
            <label htmlFor="">Prix d'achat</label>
            <Input type="number" />
          </div>
          <div>
            <label htmlFor="">Prix de vente</label>
            <Input type="number" />
          </div>
          <Button>Save</Button>
        </form>
      </div>
    </div>
  </>
)

export default AddProduct