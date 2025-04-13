import Product from "../../../models/Product";
import ProductResponse from "../../../models/ProductResponse";

export default interface ProductNetworkService {

    createProduct(product:Product):Promise<Product>

    getProducts():Promise<ProductResponse[]>
    getProductId(productId:number):Promise<ProductResponse>
    updateProduct(product:Product):Promise<Product>
    deleteProduct(productId:number):Promise<string>
}