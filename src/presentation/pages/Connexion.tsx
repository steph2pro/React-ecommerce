import ButtonSubmit from "../components/Button";
import Input from "../components/Input";
import R from '../../../public/assets/R.png'
import F from '../../../public/assets/F.png'
import 'react-toastify/dist/ReactToastify.css';
import useLoginHook from "../hook/users/useLoginHook.ts";
import useConnexionController from "../hook/useConnexionController.ts";


export default function Connexion() {
    // const { onSubmit, register, handleSubmit, errors, loginQuery} = useConnexionController();
    const { register, handleSubmit,onSubmit, errors, isCreating,setValue, } = useLoginHook();
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="flex flex-col items-center content-center justify-center h-screen mt-8 bg-gray-100">

                    <div className="bg-white min-w-[50vw] shadow-lg mx-auto  lg:px-20 h-[60vh] m-8 p-4">
                        <div>
                            <h2 className="text-center text-[20px]  p-3 font-bold">Login</h2>
                            <p className=" text-gray-500 space-x-2 text-center text-[15px]">New to Our Product <span className="text-[15px] text-blue-700  m-3"><a href="register">Create Account</a></span></p>
                        </div>
                    <div>
                    <div>
                        <Input type="email" placeholder="Email"  {...register("email")} />
                        {errors.email?.message && <p className="text-sm text-red-500">{errors.email.message}</p>}
                    </div>
                    <div>
                        <Input type="password" placeholder="Password"  {...register("password")} />
                        {errors.password?.message && <p className="text-sm text-red-500">{errors.password.message}</p>}
                    </div>
                        
                        <div className="w-full my-8 ">
                            <ButtonSubmit  className=' bg-custom_blue'> Login</ButtonSubmit>

                        </div>
                        <div className="m-3 text-center text-custom-color-text ">
                        
                            <a href="#" className="m-2 text-sm text-blue-600 text-custom-color-url">Forgot Password</a>

                        </div>
                        <hr />
                    </div> 
                    </div>

                </div>

            </form>

</>
    );
}

