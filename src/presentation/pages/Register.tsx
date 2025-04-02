import React from 'react'
import Input from '../components/Input'
import R from '../../../public/assets/R.png'
import F from '../../../public/assets/F.png'
import ButtonSubmit from "../components/Button";
const Register = () => {
  return (
    <>
        <form>

        <div className="bg-gray-100  flex flex-col content-center items-center justify-center h-[180vh] mt-8">

            <div className="bg-white min-w-[50vw] shadow-lg mx-auto m-4 lg:px-20 h-[120vh]">
                <div>
                    <h2 className="text-center text-[20px]  p-3 font-bold">Create Account</h2>
                    <p className=" text-gray-500 space-x-2 text-center text-[10px]"> <span className="text-[20px] text-blue-700 "><a href="/login">Sign In</a></span></p>
                </div>
            <div>

            <div >
                <Input type="text" placeholder="Votre nom " />
            </div>

            <div>
            
                <Input type="text" placeholder="Votre Prenom " />
            </div>
            <div>
            
                <Input type="file" placeholder="Votre profile " />
            </div>
            <div>
            
                <Input type="text" placeholder="Votre sexe" />
            </div>
            <div>

                <Input type="text" placeholder="Votre Adresse" />
            </div>
            <div>
                <Input type="email" placeholder="Email" />
            </div>
            <div>
                <Input type="text" placeholder="Telephone" />
            </div>
            <div>
                <Input type="password" placeholder="Password" />
            </div>
                
                <div className="w-full my-8 ">
                    <ButtonSubmit  className=' bg-custom_blue'> Create An Aount</ButtonSubmit>

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