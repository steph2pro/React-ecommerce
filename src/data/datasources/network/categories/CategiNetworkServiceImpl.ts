import CategorinetworkService from "./CategoriNetworkService.ts";
import { Http } from "../../../../services/Http.ts";
import Category from "../../../models/Category.ts";

export default class CategoriNetworkServiceImpl implements CategorinetworkService{
    async regiter(category: Category): Promise<Category> {
        const formData = new FormData();
        for(const key in category){
            formData.append(key, category[key as keyof Category] as any);
        }

        const res = await Http.post<Category>("categories", formData, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return res.data;
    }
   async getCategorys(): Promise<Category[]> {
       const res = await Http.get<{ categories : Category[]}>("categories");
       return await res.data.categories;
     }
     async getCategoryById(categoryId: number): Promise<Category> {
       const res = await Http.get<Category>(`categories/${categoryId}`);
       return await res.data;
     }
     async updateCategory(category: Category): Promise<Category> {
      
       const res = await Http.put<Category>(`categories/${category.id}`, category);
       return await res.data;
     }
     
     async deleteCategory(categoryId: number): Promise<string> {
       const res = await Http.delete<string>(`categories/${categoryId}`);
       return await res.data;
     }

    async getCategorys(): Promise<Category[]> {
        const res = await Http.get<{ categories : Category[]}>("categories");
        return await res.data.categories;
      }
      async getCategoryById(categoryId: number): Promise<Category> {
        const res = await Http.get<Category>(`categorie/${categoryId}`);
        return await res.data;
      }
      async updateCategory(category: Category): Promise<Category> {
       
        const res = await Http.put<Category>(`categorie/${category.id}`, category);
        return await res.data;
      }
      
      async deleteCategory(categoryId: number): Promise<string> {
        const res = await Http.delete<string>(`categorie/${categoryId}`);
        return await res.data;
      }

}