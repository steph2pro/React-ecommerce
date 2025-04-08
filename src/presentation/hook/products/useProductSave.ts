import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import ProductRepositoryImpl from "../../../data/repositories/ProductRepositoryImpl";
import ProductNetworkServiceImpl from "../../../data/datasources/network/products/ProductNetworkServiceImpl";
import { useProductSave } from "../../../domain/usecases/product/useProductSave";
import Product from "../../../data/models/Product";

import { STRING_ROUTE_HOME } from "../../utils/const";

const productSave = () => {
  const createUser = useProductSave(
    new ProductRepositoryImpl(new ProductNetworkServiceImpl())
  );
  const navigate = useNavigate();
  const schema = Yup.object().shape({
    marque: Yup.string().required("La marque est requise"),
    description: Yup.string().required("la description est requise"),
    quantite: Yup.string().required("la quantite est requise"),
    prixachat: Yup.string().required("Le prix d'achat est requis"),
    prix_vente: Yup.string().required("Le prix de vente est requis"),

    categorie_id: Yup.string().required("La categorie est requise"),
  });

  // Initialisation de react-hook-form avec yupResolver
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Product>({
    resolver: yupResolver(schema),
    mode: "onTouched", // Validation au blur
  });

  // Soumission du formulaire
  const onSubmit = async (data: Product) => {
    data.user_id=1;
    console.log(data);
    console.log(data.user_id);
    if (createUser.isLoading) return;

    try {
      // Appel de la mutation avec les données du formulaire
      await createUser.mutateAsync(data);

      // // Navigation en cas de succès
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

export default productSave;