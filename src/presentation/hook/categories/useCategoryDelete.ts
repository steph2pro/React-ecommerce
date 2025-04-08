
import CategoryRepositoryImpl from "../../../data/repositories/CategoryRepositoryImpl";
import CategoryNetworkServiceImpl from "../../../data/datasources/network/categories/CategiNetworkServiceImpl";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDeleteCategory } from "../../../domain/usecases/categorie/useCategoryDelete";
import { STRING_ROUTE_CATEGORIE } from "../../utils/const";
import User from "../../../data/models/User";

const useCategoryDelete = (categoryId: number) => {
  const deleteProf = useDeleteCategory(
    categoryId,
    new CategoryRepositoryImpl(new CategoryNetworkServiceImpl())
  );
  const navigate = useNavigate();


  // Initialisation de react-hook-form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    // defaultValues: initialData,
  });

  // Gestion de la supression 
  const onSubmit = async (data) => {
    if (deleteProf.isLoading) return;

    try {
        const id=data.id;
      await deleteProf.mutateAsync({
        id,
        ...data,
      });

      // Navigation après mise à jour réussie
      navigate(STRING_ROUTE_CATEGORIE);
    } catch (error) {
      console.error("Erreur lors de la supression :", error);
    }
  };

  return {
    register,
    handleSubmit,
    setValue,
    onSubmit,
    errors,
    isDeleted: deleteProf.isLoading,
  };
};

export default useCategoryDelete;
