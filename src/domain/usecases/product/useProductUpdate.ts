import {useMutation,useQueryClient } from "@tanstack/react-query";
import ProductRepositoryImpl from "../../../data/repositories/ProductRepositoryImpl";
import Product from "../../../data/models/Product";
// import ProductResponse from "../../../data/models/ProductResponse";
import { useNotification } from "../../../services/useNotification";
export const useUpdateProduct = (repository:ProductRepositoryImpl) => {
    const queryClient = useQueryClient();
    const notify = useNotification();
    return useMutation(
        async (propuct:Product)=>
            await repository.updateProduct(propuct),

        {
            onSuccess: (updatedProduct)=>{
                notify.success(`Produit moduit modifié avec success`);
               
                queryClient.invalidateQueries(["product", updatedProduct.id]);

            },
             onError:()=>{
                notify.error("faild to update products")
             },
        }
        
    );
};