import { useMutation } from "@tanstack/react-query";
import UserRepositoryImpl from "../../../data/repositories/UserRepositoryImpl";
import { useNotification } from "../../../services/useNotification";
import Login from "../../../data/models/Login";


export const loginUseCase = (repository:UserRepositoryImpl)=>{
    const notify = useNotification();

    return useMutation(
        async (login:Login)=>{
            console.log("mutations executee avec les donnees",login)
            return  await repository.loginUser(login);
        },
        {
            onSuccess: () =>{
                notify.success("loged succcesful")
            },

            onError:(error:Error)=>{
                notify.error(`faild to connect: ${error.message}`)
            }
        }
    )
   
}