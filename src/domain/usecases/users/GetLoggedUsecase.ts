import { useMutation, useQuery } from "@tanstack/react-query";
import UserRepositoryImpl from "../../../data/repositories/UserRepositoryImpl";
import { useNotification } from "../../../services/useNotification";
import Login from "../../../data/models/Login";

export const useGetLoggedUser = (repository: UserRepositoryImpl, token: string) => {
    const notify = useNotification();
  
    return useQuery(
      ["getLoggedUser", token],
      async () => {
        // Vérifie que le token est fourni avant d'envoyer la requête
        if (!token) {
          throw new Error("Le token est requis pour récupérer les informations utilisateur.");
        }
        return await repository.getLoggedUser(token);
      },
      {
        onError: (error: Error) => {
          // Log l'erreur pour un débogage plus facile
          console.error("Erreur lors de la récupération des informations utilisateur :", error);
          // Affiche une notification d'erreur avec les détails
          notify.error(`La récupération a échoué : ${error.message}`);
        },
      }
    );
  };
   