import Product from "../../../models/Product";

export default interface ProductNetworkService {

    createProduct(product:Product):Promise<Product>
}