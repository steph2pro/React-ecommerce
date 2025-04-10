import { ProductRepository } from "../../domain/repositories/ProductRepository";
import ProductNetworkService from "../datasources/network/products/ProductNetworkService";
import Product from "../models/Product";

export default class ProductRepositoryImpl implements ProductRepository {

    dataSource : ProductNetworkService
    constructor (dataSource:ProductNetworkService){
        this.dataSource = dataSource
    }

    async createProduct(product:Product):Promise<Product> {
        return this.dataSource.createProduct(product)
    }
}