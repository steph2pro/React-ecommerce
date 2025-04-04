import Category from "../../data/models/Category.ts";

export interface CategoruRepository{
    register (category:Category):Promise<Category>
}