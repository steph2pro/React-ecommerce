import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import CategoryRepositoryImpl from "../../../data/repositories/CategoryRepositoryImpl";
import CategoryNetworkServiceImpl from "../../../data/datasources/network/categories/CategiNetworkServiceImpl";
import { useAddCategory } from "../../../domain/usecases/categorie/useCategoryAdd";
import Category from "../../../data/models/Category";
import { STRING_ROUTE_CATEGORIE } from "../../utils/const";


const useCategoryAdd = () => {
  const createProf = useAddCategory(new CategoryRepositoryImpl(new CategoryNetworkServiceImpl()));
  const navigate = useNavigate();

  // Schéma de validation Yup
  const schema = Yup.object().shape({
      
      intitule: Yup.string()
        .required("Le titre de la Category  est requis"),
      description: Yup.string()
        .required("la description de la Category  est requise")
   });

  // Initialisation de react-hook-form avec yupResolver
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Category>({
    resolver: yupResolver(schema),
    mode: "onTouched", // Valide lorsque le champ perd le focus
  });

  const onSubmit = async (data: Category) => {
    if (createProf.isLoading) return;
  
    try {
      
  
      // Appel de la mutation avec les données converties
      await createProf.mutateAsync({
        ...data,
      });
  
      // Navigation en cas de succès
      navigate(STRING_ROUTE_CATEGORIE);
    } catch (error) {
      console.error('Erreur Axios :', error);
    }
  };
  
  return {
    register,
    handleSubmit,
    setValue, onSubmit,
    errors,
  };
};

export default useCategoryAdd;
