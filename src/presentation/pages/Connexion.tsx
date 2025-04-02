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

<div className="bg-gray-100  flex flex-col content-center items-center justify-center h-screen mt-8">

    <div className="bg-white min-w-[50vw] shadow-lg mx-auto m-4 lg:px-20 h-screen mt-4">
        <div>
            <h2 className="text-center text-[20px]  p-3 font-bold">Create Account</h2>
            <p className=" text-gray-500 space-x-2 text-center text-[15px]">New to Our Product <span className="text-[15px] text-blue-700  m-3"><a href="#">Create Account</a></span></p>
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
            <ButtonSubmit  className=' bg-custom_blue'> Create An Aount</ButtonSubmit>

        </div>
        <div className="text-center text-custom-color-text m-3 ">
           
            <a href="#" className="text-custom-color-url m-2 text-sm text-blue-600">Forgot Password</a>

        </div>
        <hr />
        <div className="m-2 items-center justify-center text-center">
            <h3 className="mt-2">Or Sign In using:</h3>

        </div>
        <div className="mt-2">
        <div className="flex space-y-1 space-x-1 items-center justify-center border border-gray-400 m-1 w-5010 h-8">
            <img src={R}  className="w-5 h-5 ml-13"/>
            <a href="#" className="text-sm text-custom-color-url p-2 text-blue-600">Continues with Google</a>
        </div>

        <div className="flex  space-x-1 items-center justify-center border border-gray-400 m-1 w-5010 h-8">
            <img src={F}  className="w-5 h-5 ml-13"/>
            <a href="#" className="text-sm text-custom-color-url p-1 m-3 text-blue-600">Continues with Faceboock</a>
        </div>
        </div>
    
    </div> 
    </div>

</div>

</form>



        </>
    );
}

