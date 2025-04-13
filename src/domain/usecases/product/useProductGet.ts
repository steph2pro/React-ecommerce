import { useQuery } from "@tanstack/react-query";
import ProductRepositoryImpl from "../../../data/repositories/ProductRepositoryImpl";
import { useNotification } from "../../../services/useNotification";

export const useGetProductById = (
    productId: number,
  repository: ProductRepositoryImpl
) => {
  const notify = useNotification();

  return useQuery(
    ["article", productId], // Clé unique avec professionId
    async () => await repository.getProductId(productId),
    {
      onSuccess: () => {

        notify.success("product  fetched successfully!");
      },
      onError: () => {
        notify.error("Failed to fetch product.");
      },
      staleTime: 1000 * 60 * 5, // 5 minutes
    }
  );
};

