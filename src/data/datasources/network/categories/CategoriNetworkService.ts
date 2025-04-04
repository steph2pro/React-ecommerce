import Category from '../../../models/Category.ts';
export default interface CategorinetworkService{
    regiter(category :Category):Promise<Category>
}