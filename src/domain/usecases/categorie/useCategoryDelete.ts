<<<<<<< HEAD
import { useMutation} from "@tanstack/react-query";
=======
import { useMutation, useQuery } from "@tanstack/react-query";
>>>>>>> 7e750e6f5ad46a39502bdd98189099bc2cc9fa9f
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
<<<<<<< HEAD
        notify.success("Category deleted successfully!");
=======
        notify.success(`Category deleted successfully!`);
>>>>>>> 7e750e6f5ad46a39502bdd98189099bc2cc9fa9f
      },
      onError: () => {
        notify.error("Failed to delete Category.");
      },
<<<<<<< HEAD
    }
  );
};
=======
    }
  );
};
>>>>>>> 7e750e6f5ad46a39502bdd98189099bc2cc9fa9f
