import { useMutation, useQueryClient } from "@tanstack/react-query";
import CategoryRepositoryImpl from "../../../data/repositories/CategoryRepositoryImpl";
import { useNotification } from "../../../services/useNotification";
import Category from "../../../data/models/Category";

export const useUpdateCategory = (repository: CategoryRepositoryImpl) => {
  const queryClient = useQueryClient();
  const notify = useNotification();

  return useMutation(
    async (category: Category) =>
      await repository.updateCategory(
        category
      ),
    {
      onSuccess: (updatedcategory) => {
        notify.success("Category updated successfully!");
        // Invalidate queries related to Category to refresh data
        queryClient.invalidateQueries(["category", updatedcategory.id]);
      },
      onError: () => {
        notify.error("Failed to update Category.");
      },
    }
  );
};