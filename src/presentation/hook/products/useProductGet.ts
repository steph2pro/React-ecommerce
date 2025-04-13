

import { useGetProductById } from "../../../domain/usecases/product/useProductGet";
import ProductRepositoryImpl from "../../../data/repositories/ProductRepositoryImpl";
import ProductNetworkServiceImpl from "../../../data/datasources/network/products/ProductNetworkServiceImpl";


const useProductGetId = (categoryId: number) => {
  const getProduct= useGetProductById(
    categoryId,
    new ProductRepositoryImpl(new ProductNetworkServiceImpl())
  );

  return {
    ProductQuery: getProduct, // Contient le résultat de la requête
  };
};

export default useProductGetId;

// recuperer un produit en fonction de son ID

