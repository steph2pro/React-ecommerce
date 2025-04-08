import Product from "../../../models/Product";

export default interface ProductNetworkService {

    register(product:Product):Promise<Product>
}