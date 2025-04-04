import CategorinetworkService from "./CategoriNetworkService.ts";
import { Http } from "../../../../services/Http.ts";
import Category from "../../../models/Category.ts";

export default class CategoriNetworkServiceImpl implements CategorinetworkService{
    async regiter(category: Category): Promise<Category> {
        const formData = new FormData();
        for(const key in category){
            formData.append(key, category[key as keyof Category] as any);
        }

        const res = await Http.post<Category>("categorie", formData, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return res.data;
    }

}