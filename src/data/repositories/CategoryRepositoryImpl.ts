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
}