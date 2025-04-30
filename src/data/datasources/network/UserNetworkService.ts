import Login from "../../models/Login.ts";
import User from "../../models/User.ts";

export default interface UserNetworkService{

    register(user: User): Promise<User>

    loginUser(login:Login): Promise<Login>

    getLoggedUser(token: string): Promise<User>;
    
    logoutUser():Promise<void>;
    
}
