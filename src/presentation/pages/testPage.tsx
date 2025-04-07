import ButtonSubmit from "../components/Button";
import Input from "../components/Input";
import useConnexionController from "../hook/useConnexionController";
import useregister from "../hook/useConnexionController";

export default function TestPage() {
 
  
    const { register, handleSubmit,onSubmit, errors, loginQuery } = useConnexionController();

    return (
        <>
                        <form onSubmit={handleSubmit(onSubmit)}>

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
            <ButtonSubmit isForm={true} isLoading={loginQuery.isLoading} > Se connecter </ButtonSubmit>

        </div>
    </div>

</div>

</form>

        </>
    );
}

