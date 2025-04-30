import { Navigate } from "react-router-dom";
import { STRING_ROUTE_CONNEXION } from "../utils/const";


const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    const token = localStorage.getItem("token"); // 🔹 Vérifie si un token est stocké

    return token ? children : <Navigate to={STRING_ROUTE_CONNEXION} />; // 🔹 Redirige vers Connexion si non connecté
};

export default PrivateRoute;