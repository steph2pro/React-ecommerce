import { useQuery } from "@tanstack/react-query";
import CategoryRepositoryImpl from "../../../data/repositories/CategoryRepositoryImpl";
import { useNotification } from "../../../services/useNotification";

export const useGetCategoryById = (
  categoryId: number,
  repository: CategoryRepositoryImpl
) => {
  const notify = useNotification();

  return useQuery(
    ["category", categoryId], // Clé unique avec professionId
    async () => await repository.getCategoryById(categoryId),
    {
      onSuccess: () => {

        notify.success("Category  fetched successfully!");
      },
      onError: () => {
        notify.error("Failed to fetch Category.");
      },
      staleTime: 1000 * 60 * 5, // 5 minutes
    }
  );
};

