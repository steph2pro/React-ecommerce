import React from 'react'
import Input from '../components/Input'

import R from '../../../public/assets/R.png'
import F from '../../../public/assets/F.png'
import ButtonSubmit from "../components/Button";
import useregister from '../hook/users/useregister';
import Button from '../components/Button';
import useConnexionController from '../hook/useConnexionController';
const Register = () => {
const { register, handleSubmit,onSubmit, errors, isCreating,setValue, } = useregister();
  return (
    <>
        <div className="bg-gray-100  flex flex-col content-center items-center justify-center h-[180vh] mt-8">

            <div className="bg-white min-w-[50vw] shadow-lg mx-auto m-4 lg:px-20 h-[120vh]">
                <div>
                    <h2 className="text-center text-[20px]  p-3 font-bold">Create Account</h2>
                    <p className=" text-gray-500 space-x-2 text-center text-[10px]"> <span className="text-[20px] text-blue-700 "><a href="/login">Sign In</a></span></p>
                </div>
            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div >

                <Input type="text" placeholder="Votre nom " 
                {...register("nom")} />
                {errors.nom?.message && <p className="text-sm text-red-500">{errors.nom.message}</p>}
            </div>

            <div>
                <Input type="text" placeholder="Votre Prenom " {...register("prenom")} />
                {errors.prenom?.message && <p className="text-sm text-red-500">{errors.prenom.message}</p>}
            </div>
            <div>

                <Input type="file" placeholder="Votre profile " onVolumeChange={(e)=>setValue("images", e.target.files?.[0]|| null)} {...register("images")}/>
            </div>
             {/* test */}
            {/* <div>
            
                <Input type="file"  onChange={handleImageChange} // Gère la sélection d'une image
               accept="image/*"/>
            </div>
            <div  className='space-x-2 flex'>
             {images.map((image, index) => (
            <div key={index} className='space-x-2'>
                <span>{image.name}</span>
                <button type="button" onClick={() => removeImage(index)} className='bg-blue-600 text-white rounded-lg p-2 text-sm'>X</button>
            </div>
              ))}
         </div> */}

            {/* fin test */}

            <div>
            
                <Input type="text" placeholder="Votre sexe"   {...register("sexe")} />

                {errors.sexe?.message && <p className="text-sm text-red-500">{errors.sexe.message}</p>}
            </div>

            <div>
                <Input type="text" placeholder="Votre Adresse" {...register("adresse")} />
                {errors.adresse?.message && <p className="text-sm text-red-500">{errors.adresse.message}</p>}
            </div>

            <div>
                <Input type="email" placeholder="Email" {...register("email")}  />
                {errors.email?.message && <p className="text-sm text-red-500">{errors.email.message}</p>}
            </div>
            <div>
                <Input type="text" placeholder="Telephone" {...register("telephone")} />
                {errors.telephone?.message && <p className="text-sm text-red-500">{errors.telephone.message}</p>}
            </div>
            <div>
                <Input type="password" placeholder="Password" {...register("password")}  />

                {errors.password?.message && <p className="text-sm text-red-500">{errors.password.message}</p>}
            </div>
           
           
                
                <div className="w-full my-8 ">
                   <Button>Create Account</Button>

                </div>
                <div className="m-3 text-center text-custom-color-text ">
                    <h3 className="text-sm">By creating account, you agree to our</h3>
                    <a href="#" className="m-2 text-sm text-custom-color-url">Terms of service</a>

                </div>
               
            
            </form>
            </div> 
            </div>
        
        </div>

    </>
  )
}

export default Register