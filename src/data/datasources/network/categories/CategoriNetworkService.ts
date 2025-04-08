import Category from '../../../models/Category.ts';
export default interface CategorinetworkService{
    regiter(category :Category):Promise<Category>
<<<<<<< HEAD

    getCategorys(): Promise<Category[]> 
    getCategoryById(categoryId: number): Promise<Category>
    updateCategory(category: Category): Promise<Category>
    deleteCategory(categoryId: number): Promise<string>
=======
    getCategorys(): Promise<Category[]> 
    getCategoryById(categoryId: number): Promise<Category>
    updateCategory(category: Category): Promise<Category>
    deleteCategory(categoryId: number): Promise<string>
>>>>>>> 7e750e6f5ad46a39502bdd98189099bc2cc9fa9f
}