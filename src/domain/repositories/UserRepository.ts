import Login from "../../data/models/Login.ts";
import User from "../../data/models/User.ts";


export interface UserRepository{
    register(user: User): Promise<User>;
    loginUser(login:Login):Promise<Login>

    logoutUser(): Promise<void>;
      
    getLoggedUser(token: string): Promise<User>;
}

 // Récupère les informations de l'utilisateur connecté