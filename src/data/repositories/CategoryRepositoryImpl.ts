import { CategoruRepository } from "../../domain/repositories/CategoryRepository";
import CategorinetworkService from "../datasources/network/categories/CategoriNetworkService";
import Category from "../models/Category";


export default class CategoruRepositoryImpl implements CategoruRepository {

    dataSource : CategorinetworkService
    constructor(dataSource:CategorinetworkService){
        this.dataSource = dataSource
    }
    async register(category: Category): Promise<Category> {
        return  this.dataSource.regiter(category)
    }

    async  getCategorys(): Promise<Category[]> {
        return  this.dataSource.getCategorys()
    }
    async getCategoryById(categoryId: number): Promise<Category> {
        return  this.dataSource.getCategoryById(categoryId)
    }
    async updateCategory(category: Category): Promise<Category> {
        return  this.dataSource.updateCategory(category)
    }
    async deleteCategory(categoryId: number): Promise<string> {
        return  this.dataSource.deleteCategory(categoryId)
    }
}