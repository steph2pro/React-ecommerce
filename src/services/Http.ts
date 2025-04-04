import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
});

type HTTPRequestConfig = AxiosRequestConfig;

const api = (axios: AxiosInstance) => {
    return {
        get: <T>(url: string, config: HTTPRequestConfig = {}) => {
            return axios.get<T>(url, config);
        },
        delete: <T>(url: string, config: HTTPRequestConfig = {}) => {
            return axios.delete<T>(url, config);
        },
        put: <T>(url: string, body: unknown, config: HTTPRequestConfig = {}) => {
            return axios.put<T>(url, body, config);
        },
        patch: <T>(url: string, body: unknown, config: HTTPRequestConfig = {}) => {
            return axios.patch<T>(url, body, config);
        },
        post: <T>(url: string, body: unknown, config: HTTPRequestConfig = {}) => {
            return axios.post<T>(url, body, config);
        },
    };
};

export const Http = api(instance);



