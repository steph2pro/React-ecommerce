import { useMutation } from "@tanstack/react-query";
import { useNotification } from "../../../services/useNotification";
import CategoruRepositoryImpl from "../../../data/repositories/CategoryRepositoryImpl";
import Category from "../../../data/models/Category";



export const CatRegister = (repository:CategoruRepositoryImpl) => {
  const notify = useNotification();

  return useMutation(
    async (category:Category) => {
      // Appelle la méthode pour créer une User via le repository
      return await repository.register(category);
    },
    {
      onSuccess: () => {
        // Affiche une notification de succès
        notify.success("Categorie créée avec succès !");
      },
      onError: (error: Error) => {
        // Affiche une notification d'erreur avec les détails
        notify.error(`La création a échoué : ${error.message}`);
      },
    }
  );
};