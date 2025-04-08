
import CategoryRepositoryImpl from "../../../data/repositories/CategoryRepositoryImpl";
import CategoryNetworkServiceImpl from "../../../data/datasources/network/categories/CategiNetworkServiceImpl";
import { useGetCategoryById } from "../../../domain/usecases/categorie/useCategoryGet";


const useCategoryGet = (categoryId: number) => {
  const getCategory= useGetCategoryById(
    categoryId,
    new CategoryRepositoryImpl(new CategoryNetworkServiceImpl())
  );

  return {
    CategoryQuery: getCategory, // Contient le résultat de la requête
  };
};

export default useCategoryGet;

// recuperer une categorie en fonction de son ID

