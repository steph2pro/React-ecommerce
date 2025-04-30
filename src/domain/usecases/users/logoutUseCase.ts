
import { useMutation } from "@tanstack/react-query";
import UserRepositoryImpl from "../../../data/repositories/UserRepositoryImpl";
import { useNotification } from "../../../services/useNotification";
// import { useNavigate } from "react-router-dom";

// import Login from "../../../data/models/Login";
// import { STRING_ROUTE_CONNEXION } from "../../../presentation/utils/const";


export const logoutUseCase = (repository:UserRepositoryImpl)=>{
    const notify = useNotification();
    // const navigate = useNavigate();
    return useMutation(
        async ()=>{
            return  await repository.logoutUser();
        },
        {
            onSuccess: () =>{
                notify.success("decconxion  reussie !");
                // navigate(STRING_ROUTE_CONNEXION);
            },

            onError:(error:Error)=>{
                notify.error(`Echec de la deconnexion: ${error.message}`)
            }
        }
    )
   
}