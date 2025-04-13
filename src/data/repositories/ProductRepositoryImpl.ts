import { ProductRepository } from "../../domain/repositories/ProductRepository";
import ProductNetworkService from "../datasources/network/products/ProductNetworkService";
import Product from "../models/Product";
import ProductResponse from "../models/ProductResponse";

export default class ProductRepositoryImpl implements ProductRepository {

    dataSource : ProductNetworkService
    constructor (dataSource:ProductNetworkService){
        this.dataSource = dataSource
    }

    async createProduct(product:Product):Promise<Product> {
        return this.dataSource.createProduct(product)
    }

    async getProducts(): Promise<ProductResponse[]> {

        return this.dataSource.getProducts();
    }
    async getProductId(productId: number):Promise<ProductResponse>{
        return this.dataSource.getProductId(productId);
    }

    async updateProduct(product: Product):Promise<Product>{
        return this.dataSource.updateProduct(product);
    }

    async deleteProduct(productId:number):Promise<string>{
        return this.dataSource.deleteProduct(productId)
    }
}