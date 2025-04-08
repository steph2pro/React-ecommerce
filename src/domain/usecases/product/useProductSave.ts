import { useNotification } from "../../../services/useNotification";
import { useMutation } from "@tanstack/react-query";
import Product from "../../../data/models/Product";
import ProductRepositoryImpl from "../../../data/repositories/ProductRepositoryImpl";

export  const useProductSave = (repository:ProductRepositoryImpl)=>{
    const notify = useNotification();

    return useMutation(
        async (product:Product)=>{
            return await repository.addProduct(product);
        },
       {
        onSuccess: ()=>{
            notify.success("Produit enregistré avec succes");
        },
        onError:(error:Error)=>{
            notify.error(`echec d'enregistrement:${error.message}`);
        }
       }
    )
}