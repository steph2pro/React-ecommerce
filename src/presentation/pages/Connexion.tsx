import ButtonSubmit from "../components/Button";
import Input from "../components/Input";
import R from '../../../public/assets/R.png'
import F from '../../../public/assets/F.png'
import 'react-toastify/dist/ReactToastify.css';
import useConnexionController from "../hook/useConnexionController.ts";


export default function Connexion() {
    // const { onSubmit, register, handleSubmit, errors, loginQuery} = useConnexionController();
    return (
        <>
             <form>

<div className="flex flex-col items-center content-center justify-center h-screen mt-8 bg-gray-100">

    <div className="bg-white min-w-[50vw] shadow-lg mx-auto m-4 lg:px-20 h-screen mt-4">
        <div>
            <h2 className="text-center text-[20px]  p-3 font-bold">Login</h2>
            <p className=" text-gray-500 space-x-2 text-center text-[15px]">New to Our Product <span className="text-[15px] text-blue-700  m-3"><a href="register">Create Account</a></span></p>
        </div>
    <div>
    <div>
        <Input type="email" placeholder="Email" />
    </div>
    <div>
        <Input type="password" placeholder="Password" />
    </div>
    <div className="flex space-x-2">
        <input type="checkbox" /><a href="#">Kep me Signed in</a>
    </div>
        
        <div className="w-full my-8 ">
            <ButtonSubmit  className=' bg-custom_blue'> Login</ButtonSubmit>

        </div>
        <div className="m-3 text-center text-custom-color-text ">
           
            <a href="#" className="m-2 text-sm text-blue-600 text-custom-color-url">Forgot Password</a>

        </div>
        <hr />
        <div className="items-center justify-center m-2 text-center">
            <h3 className="mt-2">Or Sign In using:</h3>

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
        </div>
    
    </div> 
    </div>

</div>

</form>



        </>
    );
}

