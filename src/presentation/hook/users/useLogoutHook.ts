import { useMutation } from "@tanstack/react-query";
import { useNotification } from "../../../services/useNotification";
import { useNavigate } from "react-router-dom";
import UserRepositoryImpl from "../../../data/repositories/UserRepositoryImpl";
import UserNetworkServiceImpl from "../../../data/datasources/network/UserNetworkServiceImpl";
import { STRING_ROUTE_CATEGORIE, STRING_ROUTE_LOGIN } from "../../utils/const";

const useLogoutHook = () => {
    const notify = useNotification();
    const navigate = useNavigate();
    const userRepository = new UserRepositoryImpl(new UserNetworkServiceImpl());

    const { mutate: logout, isLoading: isLoggingOut, reset } = useMutation(
        async () => await userRepository.logoutUser(),
        {
            onSuccess: () => {
                notify.success("Déconnexion réussie !");
                localStorage.removeItem("token"); // 🔹 Supprime le token
                sessionStorage.clear();           // 🔹 Vide la session utilisateur
                reset(); // 🔹 Réinitialise la mutation après succès
                navigate(STRING_ROUTE_CATEGORIE); // 🔹 Redirige vers la page de connexion
            },
            onError: (error: Error) => {
                notify.error(`La déconnexion a échoué : ${error.message}`);
                console.error("Erreur lors de la déconnexion :", error);
            },
        }
    );

    return { logout, isLoggingOut }; // 🔹 Retourne bien les fonctions à utiliser dans Dashboard.tsx
};

export default useLogoutHook;