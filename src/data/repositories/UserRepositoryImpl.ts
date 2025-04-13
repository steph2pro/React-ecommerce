import {UserRepository} from "../../domain/repositories/UserRepository.ts";
import UserNetworkService from "../datasources/network/UserNetworkService.ts";
import Login from "../models/Login.ts";
import User from "../models/User.ts";

export default class UserRepositoryImpl implements UserRepository {

    dataSource: UserNetworkService

    constructor(dataSource: UserNetworkService) {
        this.dataSource = dataSource;
    }

    async register(user: User): Promise<User> {
        return await this.dataSource.register(user);
    }
    
    async loginUser(login: Login): Promise<Login> {
        return await this.dataSource.loginUser(login);
    }
    // async login(data: UserPorps): Promise<UserPorps> {
    //     return await this.dataSource.login(data);
    // }

    // async logout(user: UserPorps): Promise<UserPorps> {
    //     return await this.dataSource.logout(user);
    // }


} // async getUsers(): Promise<UserPorps[]> {
    //     return await this.dataSource.getUsers();
    // }

    // async login(data: UserPorps): Promise<UserPorps> {
    //     return await this.dataSource.login(data);
    // }

    // async logout(user: UserPorps): Promise<UserPorps> {
    //     return await this.dataSource.logout(user);
    // }