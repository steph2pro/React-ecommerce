import Product from "../../../models/Product";
import ProductNetworkService from "./ProductNetworkService";
import { Http } from "../../../../services/Http";
import ProductResponse from "../../../models/ProductResponse";

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

    async getProducts(): Promise<ProductResponse[]> {
        const res = await Http.get<{articles :ProductResponse[]}>("articles")
        return await res.data.articles
    }

    async getProductId(productId: number): Promise<ProductResponse> {
        const res = await Http.get<ProductResponse>(`articles/${productId}`);
        return await res.data;
    }
    
    async updateProduct(product: Product): Promise<Product> {
        const res = await Http.put<Product>(`articles/${product.id}`,product);
        return await res.data;
    }

    async deleteProduct(productId: number): Promise<string> {
        const res = await Http.delete<string>(`articles/${productId}`);
        return await res.data
    }
}