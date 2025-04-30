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
    
    async loginUser(loginData: Login): Promise<Login> {
        const res =await this.dataSource.loginUser(loginData);
        localStorage.getItem(res.token);
        return res;
    }

    async logoutUser(): Promise<void> {
        await this.dataSource.logoutUser();
    }
    
    async getLoggedUser(token: string): Promise<User> {
        return await this.dataSource.getLoggedUser(token); // Délègue au service réseau
      }
    
    //  async getLoggedUser(): Promise<User> {
    //     const token = localStorage.getItem("token");
       
    //      return   this.dataSource.getLoggedUser(token);
    //  }

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