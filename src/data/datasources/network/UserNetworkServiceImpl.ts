import UserNetworkService from "./UserNetworkService.ts";
import {Http} from "../../../services/Http.ts";
import User from "../../models/User.ts";
import Login from "../../models/Login.ts";

export default class UserNetworkServiceImpl implements UserNetworkService {
    
    //enregistrer un utilisateur
    async register(user: User): Promise<User> {
        const formData = new FormData();
        // console.log(user.image)
        // console.log(user.image[0])
        for (const key in user) {
            if (key === "image" && user.image?.[0] instanceof File) {
                formData.append("image", user.image[0]);
            }
            
            
            formData.append(key, user[key as keyof User] as any);
        }
     

        const res = await Http.post<User>("users", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return res.data;
       
        
    }


   //************************************login d'un utilisateur
   
  async loginUser(login:Login):Promise<Login>{
    const res =await Http.post<Login>("login",login);
    return res.data;
  }

    // async logout(): Promise<Login> {
    //     const res = await fetch("http://localhost:3005/logout");
    //     return await res.json();
    //  }

    //     async getUsers(): Promise<Login[]> {
    //      const res = await fetch("http://localhost:3005/users");
    //      return await res.json();
    // }
}  
  