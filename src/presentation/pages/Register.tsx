import React from 'react'
import Input from '../components/Input'
import useregister from '../hook/users/UserRegister';
import Button from '../components/Button';
const Register = () => {
    const [images, setImages] = React.useState([]);
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
    
    const { register, setValue, handleSubmit, onSubmit, errors, isCreating } = useregister();
  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)} >

        <div className="bg-gray-100  flex flex-col content-center items-center justify-center h-[180vh] mt-8">

            <div className="bg-white min-w-[50vw] shadow-lg mx-auto m-4 lg:px-20 h-[120vh]">
                <div>
                    <h2 className="text-center text-[20px]  p-3 font-bold">Create Account</h2>
                    <p className=" text-gray-500 space-x-2 text-center text-[10px]"> <span className="text-[20px] text-blue-700 "><a href="/login">Sign In</a></span></p>
                </div>
            <div>

            <div >
                <Input type="text" placeholder="Votre nom " 
                {...register("nom")} />
                {errors.nom?.message && <p className="text-sm text-red-500">{errors.nom.message}</p>}
            </div>

            <div>
            
                <Input type="text" placeholder="Votre Prenom "  {...register("prenom")} />
                {errors.prenom?.message && <p className="text-sm text-red-500">{errors.prenom.message}</p>}
            </div>
            <div>
            
                <Input type="file" placeholder="Votre profile " onVolumeChange={(e)=>setValue("image", e.target.files?.[0]|| null)} {...register("image")}  multiple/>
            </div>
             {/* test */}
            <div>
            
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
         </div>

            {/* fin test */}
            <div>
            
                <Input type="text" placeholder="Votre sexe"   {...register("sexe")} />
                {errors.sexe?.message && <p className="text-sm text-red-500">{errors.sexe.message}</p>}
            </div>
            <div>

                <Input type="text" placeholder="Votre Adresse"   {...register("adresse")} />
                {errors.adresse?.message && <p className="text-sm text-red-500">{errors.adresse.message}</p>}
            </div>
            <div>
                <Input type="email" placeholder="Email" {...register("email")} />
                {errors.email?.message && <p className="text-sm text-red-500">{errors.email.message}</p>}
            </div>
            <div>
                <Input type="text" placeholder="Telephone"{...register("telephone")} />
                {errors.telephone?.message && <p className="text-sm text-red-500">{errors.telephone.message}</p>}
            </div>
            <div>
                <Input type="password" placeholder="Password" {...register("password")} />
                {errors.password?.message && <p className="text-sm text-red-500">{errors.password.message}</p>}
            </div>
                
                <div className="w-full my-8 ">
                   <Button>Create Account</Button>

                </div>
                <div className="m-3 text-center text-custom-color-text ">
                    <h3 className="text-sm">By creating account, you agree to our</h3>
                    <a href="#" className="m-2 text-sm text-custom-color-url">Terms of service</a>

                </div>
                {/* <hr />
                <div className="items-center justify-center m-2 text-center">
                    <h3 className="mt-2">Or create Acount using:</h3>

                </div>
                <div className="mt-2">
                <div className="flex items-center justify-center h-8 m-1 space-x-1 space-y-1 border border-gray-400 w-5010">
                    <img src={R}  className="w-5 h-5 ml-13"/>
                    <a href="#" className="p-2 text-sm text-blue-600 text-custom-color-url">Continues with Google</a>
                </div>

                <div className="flex items-center justify-center h-8 m-1 space-x-1 border border-gray-400 w-5010">
                    <img src={F}  className="w-5 h-5 ml-13"/>
                    <a href="#" className="p-1 m-3 text-sm text-blue-600 text-custom-color-url">Continues with Faceboock</a>
                </div>
                </div> */}
            
            </div> 
            </div>
        
        </div>

</form>
    </>
  )
}

export default Register