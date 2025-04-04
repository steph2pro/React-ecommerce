import User from "../../data/models/User.ts";


export interface UserRepository{


    register(user: User): Promise<User>;
}

//pour que les donnees ne communiquent pas directement avec le backend