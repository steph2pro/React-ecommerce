import { useGetAllCategories } from "../../../domain/usecases/categorie/useCategoryGetAll";
import CategoryRepositoryImpl from "../../../data/repositories/CategoryRepositoryImpl";
import CategoryNetworkServiceImpl from "../../../data/datasources/network/categories/CategiNetworkServiceImpl";

function useCategories() {
    const getAllCat = useGetAllCategories(
        new CategoryRepositoryImpl(new CategoryNetworkServiceImpl())
    );
console.log(getAllCat.data);
    return {
        catQuery: getAllCat,
    };
}


export default useCategories;


//recuperer toute les categories
