import { useQuery } from "@tanstack/react-query";
import ProductRepositoryImpl from "../../../data/repositories/ProductRepositoryImpl";
import { useNotification } from "../../../services/useNotification";

export const useGetAllProducts = (repository: ProductRepositoryImpl) => {
  const notify = useNotification();

  return useQuery(
    ["articles"], // Clé unique pour identifier cette requête
    async () => await repository.getProducts(), 
    {
      onSuccess: () => {
        notify.success("products fetched successfully!");
      },
      onError: () => {
        notify.error("Failed to fetch products.");
      },
      staleTime: 1000 * 60 * 5, // Durée avant de marquer les données comme obsolètes (5 minutes)

    }
  );
};