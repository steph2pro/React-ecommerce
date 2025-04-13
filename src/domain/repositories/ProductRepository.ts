import Product from "../../data/models/Product";
import ProductResponse from "../../data/models/ProductResponse";

export interface ProductRepository{
    createProduct (product:Product):Promise<Product>
    getProducts():Promise<ProductResponse[]>
    getProductId(productId : number):Promise<ProductResponse>
    updateProduct(product: Product):Promise<Product>
    deleteProduct(productId:number):Promise<string>
}