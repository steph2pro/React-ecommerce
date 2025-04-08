import Product from "../../data/models/Product";

export interface ProductRepository{
    createProduct (product:Product):Promise<Product>
}