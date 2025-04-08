import UserNetworkService from "./UserNetworkService.ts";
import {Http} from "../../../services/Http.ts";
import User from "../../models/User.ts";

export default class UserNetworkServiceImpl implements UserNetworkService {
    

    async register(user: User): Promise<User> {
        const formData = new FormData();
        // console.log(user.image)
        // console.log(user.image[0])
        for (const key in user) {

            if (key === "image" && user.images[0] instanceof File) {
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

}    // async login(): Promise<UserPorps> {
    //     const res = await Http.post<UserPorps>("/todos", {});

    //     await  wait(3000);
    //     console.log(res.data);
    //     return {username: "kaka", password:"12345678",email: "user@example.com"}
    // }

    // async logout(): Promise<UserPorps> {
    //     const res = await fetch("http://localhost:3005/logout");
    //     return await res.json();
    // }

    // async getUsers(): Promise<UserPorps[]> {
    //     const res = await fetch("http://localhost:3005/users");
    //     return await res.json();
    // }