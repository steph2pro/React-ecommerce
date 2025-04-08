import Category from '../../../models/Category.ts';
export default interface CategorinetworkService{
    regiter(category :Category):Promise<Category>
    getCategorys(): Promise<Category[]> 
    getCategoryById(categoryId: number): Promise<Category>
    updateCategory(category: Category): Promise<Category>
    deleteCategory(categoryId: number): Promise<string>
}