import Category from "../../data/models/Category.ts";

export interface CategoruRepository{
    register (category:Category):Promise<Category>
    getCategorys(): Promise<Category[]> 
    getCategoryById(categoryId: number): Promise<Category>
    updateCategory(category: Category): Promise<Category>
    deleteCategory(categoryId: number): Promise<string>
}