import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import CategoryRepositoryImpl from "../../../data/repositories/CategoryRepositoryImpl";
import CategiNetworkServiceImpl from "../../../data/datasources/network/categories/CategiNetworkServiceImpl";
import User from "../../../data/models/Category";
import { CatRegister } from "../../../domain/usecases/categorie/CatRegister";
import { STRING_ROUTE_HOME } from "../../utils/const";

const catregister = () => {
  const createUser = CatRegister(
    new CategoryRepositoryImpl(new CategiNetworkServiceImpl())
  );
  const navigate = useNavigate();
  const schema = Yup.object().shape({
    intitule: Yup.string().required("Le titre est requis"),
    description: Yup.string().required("la description est requise"),
  });

  // Initialisation de react-hook-form avec yupResolver
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<User>({
    resolver: yupResolver(schema),
    mode: "onTouched", // Validation au blur
  });

  // Soumission du formulaire
  const onSubmit = async (data: User) => {
    // console.log(data.image);
    if (createUser.isLoading) return;

    try {
      // Appel de la mutation avec les données du formulaire
      await createUser.mutateAsync(data);

      // Navigation en cas de succès
      navigate(STRING_ROUTE_HOME);
    } catch (error) {
      console.error("Erreur lors de la création de l'utilisateur :", error);
    }
  };

  return {
    register,
    handleSubmit,
    setValue,
    onSubmit,
    errors,
    isCreating: createUser.isLoading,
  };
};

export default catregister;