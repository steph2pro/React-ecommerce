import { useMutation } from "@tanstack/react-query";
import CategoryRepositoryImpl from "../../../data/repositories/CategoryRepositoryImpl";
import { useNotification } from "../../../services/useNotification";
import Category from "../../../data/models/Category";



export const useAddCategory = (repository: CategoryRepositoryImpl) => {
  const notify = useNotification();

  return useMutation(
    async (category:Category) => {
      // Appelle la méthode pour créer une Category via le repository
      return await repository.createCategory(category);
    },
    {
      onSuccess: () => {
        // Affiche une notification de succès
        notify.success("Category créée avec succès !");
      },
      onError: (error: Error) => {
        // Affiche une notification d'erreur avec les détails
        notify.error(`La création a échoué : ${error.message}`);
      },
    }
  );
};
