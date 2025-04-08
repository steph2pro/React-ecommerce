import Product from "../../data/models/Product";

export interface ProductRepository{
    register (product:Product):Promise<Product>
}