import React from 'react'
import Input from '../components/Input'
import R from '../../../public/assets/R.png'
import F from '../../../public/assets/F.png'
import ButtonSubmit from "../components/Button";
import useregister from '../hook/users/useregister';
import Button from '../components/Button';
import useConnexionController from '../hook/useConnexionController';
const Register = () => {
    
//   const { register, setValue, handleSubmit, onSubmit, errors, isCreating } = useregister();

 
const { register, handleSubmit,onSubmit, errors, isCreating,setValue, } = useregister();
  return (
    <>
            {/* <form onSubmit={handleSubmit(onSubmit)}>

<div className="flex flex-col items-center content-center justify-center h-screen bg-gray-100">
    <div className="bg-white min-w-[40vw] max-w-lg shadow-lg mx-auto py-10 lg:px-20 rounded-md">
        <div className="flex items-center justify-center mt-5 text-center ">
            <h1 className="text-5xl font-bold text-center text-green-950 mb-7 ">Connexion</h1>
        </div>

        <Input type="email" placeholder="Email " {...register("email")} />
        {errors?.email && (
            <span className="text-sm text-rose-500 ">
    {errors.email.message}
</span>
        )}
        <Input type="password" placeholder="Mot de passe"{...register("password")} />
        {errors?.password && (
            <span className="text-sm text-rose-500 ">
    {errors.password.message}
</span>
        )}

        <div className="w-full my-8 ">
            <ButtonSubmit isForm={true}  > Se connecter </ButtonSubmit>

        </div>
    </div>

</div>

</form> */}

        <div className="bg-gray-100  flex flex-col content-center items-center justify-center h-[180vh] mt-8">

            <div className="bg-white min-w-[50vw] shadow-lg mx-auto m-4 lg:px-20 h-[120vh]">
                <div>
                    <h2 className="text-center text-[20px]  p-3 font-bold">Create Account</h2>
                    <p className=" text-gray-500 space-x-2 text-center text-[10px]"> <span className="text-[20px] text-blue-700 "><a href="/login">Sign In</a></span></p>
                </div>
            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div >
                <Input type="text" placeholder="Votre nom " {...register("nom")} />
                {errors.nom?.message && <p className="text-sm text-red-500">{errors.nom.message}</p>}
            </div>

            <div>
            
                <Input type="text" placeholder="Votre Prenom " {...register("prenom")} />
                {errors.prenom?.message && <p className="text-sm text-red-500">{errors.prenom.message}</p>}
            </div>
            <div>
            <Input type="file" placeholder="Votre profil" onChange={(e) => setValue("image", e.target.files?.[0] || null)}  {...register("image")}  
  accept="image/*" />
                {/* <Input type="file" placeholder="Votre profile " {...register("image")} /> */}
                {/* {errors.nom?.message && <p className="text-sm text-red-500">{errors.nom.message}</p>} */}
            </div>
            <div>
            
                <Input type="text" placeholder="Votre sexe" {...register("sexe")} />
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
                    <ButtonSubmit  className=' bg-custom_blue' disabled={isCreating}>
                        {isCreating ? "Creating you Acount..." : "Create An Acount"} 
                        
                    </ButtonSubmit>
                    {/* <Button className="w-full" disabled={isCreating} onClick={()=>{handleSubmit(onSubmit2)}}>
                        {isCreating ? "En cours d'ajout..." : "Ajouter"}
                    </Button> */}
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