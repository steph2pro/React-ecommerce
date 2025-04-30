import { useQuery } from "@tanstack/react-query";
import { useNotification } from "../../../services/useNotification";
import UserRepositoryImpl from "../../../data/repositories/UserRepositoryImpl";
import UserNetworkServiceImpl from "../../../data/datasources/network/UserNetworkServiceImpl";
import User from "../../../data/models/User";

const useGetLoggedUserHook = (token: string | null) => {
  const notify = useNotification();
  const userRepository = new UserRepositoryImpl(new UserNetworkServiceImpl());

  const { data, isLoading, isError } = useQuery(
    ["getLoggedUser", token],
    async () => {
      if (!token) {
        throw new Error("Le token est requis pour récupérer les informations utilisateur.");
      }
      return await userRepository.getLoggedUser(token);
    },
    {
      onError: (error: Error) => {
        notify.error(`La récupération a échoué : ${error.message}`);
        console.error("Erreur lors de la récupération des informations utilisateur :", error);
      },
    }
  );

  return {
    data,
    isLoading,
    isError,
  };
};

export default useGetLoggedUserHook;