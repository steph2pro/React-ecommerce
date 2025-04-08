import { useMutation} from "@tanstack/react-query";
import CategoryRepositoryImpl from "../../../data/repositories/CategoryRepositoryImpl";
import { useNotification } from "../../../services/useNotification";

export const useDeleteCategory = (
  categoryId: number,
  repository: CategoryRepositoryImpl
) => {
  const notify = useNotification();

  return useMutation(
    async () => await repository.deleteCategory(categoryId),
    {
      onSuccess: () => {
        notify.success("Category deleted successfully!");
      },
      onError: () => {
        notify.error("Failed to delete Category.");
      },
    }
  );
};