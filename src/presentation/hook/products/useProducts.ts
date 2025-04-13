import { useGetAllProducts } from "../../../domain/usecases/product/useProductGetAll";
import ProductRepositoryImpl from "../../../data/repositories/ProductRepositoryImpl";
import ProductNetworkServiceImpl from "../../../data/datasources/network/products/ProductNetworkServiceImpl";

function useProducts() {
    const getAllProd = useGetAllProducts(
        new ProductRepositoryImpl(new ProductNetworkServiceImpl())
    );
console.log(getAllProd.data);
    return {
        prodQuery: getAllProd,
    };
}

export default useProducts;


//recuperer toute les categories
