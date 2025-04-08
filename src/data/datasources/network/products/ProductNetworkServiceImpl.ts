import Product from "../../../models/Product";
import ProductNetworkService from "./ProductNetworkService";
import { Http } from "../../../../services/Http";

export default class ProductNetworkServiceImpl implements ProductNetworkService{
    async createProduct(product: Product): Promise<Product> {
        const formData = new FormData();
    
        for (const key in product) {
            const value = product[key as keyof Product];
                console.log(value);
            if (key === "images" && Array.isArray(value)) {
                // Ajoute chaque image (File) au FormData
                value.forEach((img, index) => {
                    if (img instanceof File) {
                        formData.append("images[]", img); // On garde le même nom pour un tableau d'images
                    }
                });
            } else if (value !== undefined && value !== null) {
                // Convertir les nombres en chaîne pour FormData
                formData.append(key, value.toString());
            }
        }
    
        const res = await Http.post<Product>('articles', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    
        return res.data;
    }
    
}