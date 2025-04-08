import User from "../../data/models/User.ts";


export interface UserRepository{
    // login(data: UserPorps): Promise<UserPorps>;
    // logout(user: UserPorps): Promise<UserPorps>;
    // getUsers(): Promise<UserPorps[]>;
    register(user: User): Promise<User>;
}

