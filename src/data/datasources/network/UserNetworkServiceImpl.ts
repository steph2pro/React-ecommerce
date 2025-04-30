import UserNetworkService from "./UserNetworkService.ts";
import {Http} from "../../../services/Http.ts";
import User from "../../models/User.ts";
import Login from "../../models/Login.ts";
import axios from "axios";
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
      const token = res.data.token;
      // console.log('token',token)
      localStorage.setItem('token',token);
      const userId = res.data.user.id;
      localStorage.setItem("userId", userId);
      console.log("ID utilisateur sauvegardé :", userId);

      console.log('jeton apres', res.data.token);
      // console.log('jeton sauvegarde', localStorage.getItem('token'))

    return res.data;
  }




  async getLoggedUser(token: string): Promise<User> {
      // Supposons que le token soit sous la forme "129|3zCKP..."
      const userId = localStorage.getItem("userId");
      console.log(userId)
    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Ajoute le token dans les en-têtes
      },
    };
    // console.log('tokennnnnnn',token);
    const response = await Http.get<User>(`user/${userId}`, config);
    console.log("reponses brutes",response);
    console.log('donnees de l\'utilisateur',response.data);
    return response.data;

  }

  async logoutUser(): Promise<void> {
      const config = {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      };
      await Http.post("logout", {}, config);
      // localStorage.removeItem("token");
  }
}  
  