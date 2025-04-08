import Product from "../../../models/Product";
import ProductNetworkService from "./ProductNetworkService";
import { Http } from "../../../../services/Http";

export default class ProductNetworkServiceImpl implements ProductNetworkService{
    async register(product: Product): Promise<Product> {
        const formData = new FormData();
        for(const key in product){
            const value = product[key as keyof Product];
            if (key === "images" && Array.isArray(value)) {
                // Ajoute chaque image du tableau au FormData
                value.forEach((image, index) => {
                    if (image instanceof File) {
                        formData.append(`image_${index}`, image);
                    }
                });
            } else if (value !== undefined && value !== null) {
                // Ajoute les autres propriétés au FormData
                formData.append(key, value as any);
            }

            formData.append(key , product[key as keyof Product] as any)
        }

        const res = await Http.post<Product>('articles',formData,{
           headers:{
            "Content-Type":"multipart/form-data",
           },
        });
        return res.data;
    }
}