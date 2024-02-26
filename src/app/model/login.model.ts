import { ResponseApi } from "./response.model";

export interface Login {
    user: string;
    password: string;
}

export interface LoginResponse extends ResponseApi {
    token: string;
}