import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import CategoryRepositoryImpl from "../../../data/repositories/CategoryRepositoryImpl";
import CategoryNetworkServiceImpl from "../../../data/datasources/network/categories/CategiNetworkServiceImpl";

import Category from "../../../data/models/Category";
import { STRING_ROUTE_CATEGORIE } from "../../utils/const";
import { useUpdateCategory } from "../../../domain/usecases/categorie/useCategoryUpdate";

// Hook pour gérer la mise à jour d'une profession
const useCategoryUpdate = () => {
  const updateProf = useUpdateCategory(new CategoryRepositoryImpl(new CategoryNetworkServiceImpl()));
  const navigate = useNavigate();

  // Schéma de validation Yup
  const schema = Yup.object().shape({
   
         intitule: Yup.string()
           .required("Le titre de la Category  est requis"),
         description: Yup.string()
           .required("la description de la Category  est requise")
  });

  // Initialisation de react-hook-form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Category>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    // defaultValues: initialData,
  });

  // Gestion de la soumission du formulaire
  const onSubmit = async (data :Category) => {
    if (updateProf.isLoading) return;
    console.log(data)

    try {
      await updateProf.mutateAsync({
        ...data,
      });

      // Navigation après mise à jour réussie
      navigate(STRING_ROUTE_CATEGORIE);
    } catch (error) {
      console.error("Erreur lors de la mise à jour :", error);
    }
  };

  return {
    register,
    handleSubmit,
    setValue,
    onSubmit,
    errors,
    isUpdating: updateProf.isLoading,
  };
};


export default useCategoryUpdate;

