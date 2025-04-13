import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import ProductRepositoryImpl from "../../../data/repositories/ProductRepositoryImpl";
import ProductNetworkServiceImpl from "../../../data/datasources/network/products/ProductNetworkServiceImpl";
import Product from "../../../data/models/Product";
import { STRING_ROUTE_CATEGORIE } from "../../utils/const";
import { useUpdateProduct } from "../../../domain/usecases/product/useProductUpdate";
// Hook pour gérer la mise à jour d'une profession
const useProductUpdate = () => {
  const updateProf = useUpdateProduct(new ProductRepositoryImpl(new ProductNetworkServiceImpl()));
  const navigate = useNavigate();

  // Schéma de validation Yup
  const schema = Yup.object().shape({
   
         marque: Yup.string()
           .required("la marque  du produit est requis"),
         description: Yup.string()
           .required("la description du produit  est requise"),
         quantite: Yup.string()
           .required("la quantite du produit  est requise"),
           prixachat: Yup.string()
           .required("le prix d'achat du produit  est requis"),
           prix_vente: Yup.string()
           .required("le prix d'achat du produit  est requis"),
           categorie_id: Yup.string()
           .required("la categorie du produit  est requise")
  });

  // Initialisation de react-hook-form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Product>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    // defaultValues: initialData,
  });

  // Gestion de la soumission du formulaire
  const onSubmit = async (data :Product) => {
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


export default useProductUpdate;

