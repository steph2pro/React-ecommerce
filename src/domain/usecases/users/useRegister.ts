import { useMutation } from "@tanstack/react-query";
import { useNotification } from "../../../services/useNotification";
import UserRepositoryImpl from "../../../data/repositories/UserRepositoryImpl";
import User from "../../../data/models/User";



export const useRegister = (repository:UserRepositoryImpl) => {
  const notify = useNotification();

  return useMutation(
    async (user:User) => {
      // Appelle la méthode pour créer une User via le repository
      return await repository.register(user);
    },
    {
      onSuccess: () => {
        // Affiche une notification de succès
        notify.success("User créée avec succès !");
      },
      onError: (error: Error) => {
        // Affiche une notification d'erreur avec les détails
        notify.error(`La création a échoué : ${error.message}`);
      },
    }
  );
};