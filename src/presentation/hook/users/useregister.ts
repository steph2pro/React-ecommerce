import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { useNavigate } from "react-router-dom";
import UserRepositoryImpl from "../../../data/repositories/UserRepositoryImpl";
import UserNetworkServiceImpl from "../../../data/datasources/network/UserNetworkServiceImpl";
import User from "../../../data/models/User";
import { useRegister } from "../../../domain/usecases/users/useRegister";
import { STRING_ROUTE_HOME } from "../../utils/const";


function useregister() {

  const createUser = useRegister(
        new UserRepositoryImpl(new UserNetworkServiceImpl())
      );
  const navigate = useNavigate();

  const schema = Yup
      .object({
        nom: Yup.string().required("Le nom est requis"),
            prenom: Yup.string().required("Le prenom est requis"),
            email: Yup.string()
              .email("Email invalide")
              .required("L'email est requis"),
            
              telephone: Yup.string()
              .matches(
                /^[0-9]{9,}$/,
                "Le numéro de téléphone doit contenir au moins 9 chiffres"
              ),
              // .required("Le numéro de téléphone est requis"),
            password: Yup.string()
              .min(8, "Le mot de passe doit contenir au moins 8 caractères")
              .matches(
                /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
                "Le mot de passe doit contenir au moins une majuscule, un chiffre et un caractère spécial"
              )
              .required("Le mot de passe est requis"),
            sexe: Yup.string().required("Le rôle est requis"),
            adresse: Yup.string().required("Le rôle est requis"),
      })
      .required();

  const {
      register,
      handleSubmit,
      setValue,
      formState: {errors},
  } = useForm<User>({
      resolver: yupResolver(schema),
      mode: "onTouched",
  });


  const onSubmit = async (data: User) => {
      console.log('test..........');
      console.log(data.image);

          if (createUser.isLoading) return;
      
          try {
            // Appel de la mutation avec les données du formulaire
            // await createUser.mutateAsync(data);
            await createUser.mutateAsync({
              ...data,
            });
            // Navigation en cas de succès
            // navigate(STRING_ROUTE_HOME);
          } catch (error) {
            console.error("Erreur lors de la création de l'utilisateur :", error);
          }
  };

  return {
      onSubmit, register, handleSubmit, errors,isCreating: createUser.isLoading,setValue,
  }

}

export default useregister