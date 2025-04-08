import User from "../../models/User.ts";

export default interface UserNetworkService{

    register(user: User): Promise<User>
}
