import { useQuery } from "@tanstack/react-query";
import CategoryRepositoryImpl from "../../../data/repositories/CategoryRepositoryImpl";
import { useNotification } from "../../../services/useNotification";

export const useGetAllCategories = (repository: CategoryRepositoryImpl) => {
  const notify = useNotification();

  return useQuery(
    ["categories"], // Clé unique pour identifier cette requête
    async () => await repository.getCategorys(), 
    {
      onSuccess: () => {
        notify.success("Categories fetched successfully!");
      },
      onError: () => {
        notify.error("Failed to fetch Categories.");
      },
      staleTime: 1000 * 60 * 5, // Durée avant de marquer les données comme obsolètes (5 minutes)
    }
  );
};