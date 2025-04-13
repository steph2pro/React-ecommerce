import { useMutation, useQuery } from "@tanstack/react-query";

import ProductRepositoryImpl from "../../../data/repositories/ProductRepositoryImpl";
import { useNotification } from "../../../services/useNotification";

export const useDeleteProduct= (
    productII: number,
  repository: ProductRepositoryImpl
) => {
  const notify = useNotification();

  return useMutation(
    async () => await repository.deleteProduct(productII),
    {
      onSuccess: () => {

        notify.success("product deleted successfully!");

      },
      onError: () => {
        notify.error("Failed to delete product.");
      },

    }
  );
};