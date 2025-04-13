import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { STRING_ROUTE_HOME } from "../../utils/const";
import { useNavigate } from "react-router-dom";
import UserRepositoryImpl from "../../../data/repositories/UserRepositoryImpl";
import UserNetworkServiceImpl from "../../../data/datasources/network/UserNetworkServiceImpl";
// import User from "../../../data/models/User";
import Login from "../../../data/models/Login";
import { loginUseCase } from "../../../domain/usecases/users/loginUseCase";


function useLoginHook() {

  const LoginUser = loginUseCase(
        new UserRepositoryImpl(new UserNetworkServiceImpl())
      );
  const navigate = useNavigate();

  const schema = Yup
      .object({
            email: Yup.string()
              .email("Email invalide")
              .required("L'email est requis"),
              // .required("Le numéro de téléphone est requis"),
            password: Yup.string()
              .min(8, "Le mot de passe doit contenir au moins 8 caractères")
              .matches(
                /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
                "Le mot de passe doit contenir au moins une majuscule, un chiffre et un caractère spécial"
              )
              .required("Le mot de passe est requis"),
      })
      .required();

  const {
      register,
      handleSubmit,
      setValue,
      formState: {errors},
  } = useForm<Login>({
      resolver: yupResolver(schema),
      mode: "onTouched",
  });


  const onSubmit = async (data: Login) => {

          if (LoginUser.isLoading) return;
      
          try {
            // Appel de la mutation avec les données du formulaire
            // await createUser.mutateAsync(data);
            await LoginUser.mutateAsync({
              ...data,
            });
            // Navigation en cas de succès
            navigate(STRING_ROUTE_HOME);
          } catch (error) {
            console.error("Erreur lors de la connexion de l'utilisateur :", error);
          }
  };

  return {
      onSubmit, register, handleSubmit, errors,isCreating: LoginUser.isLoading,setValue,
  }

}

export default useLoginHook