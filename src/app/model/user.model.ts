import { ResponseApi } from "./response.model";

export interface User {
    login: string;
    password: string;
    name: string
    paternal: string;
    maternal: string;
    email: string;
    client: number;
    area: number;
    endDate: number;
    access: number;
    status: string;
}

export interface UserFilterRequest {
    name: string;
    date1: number;
    date2: number;
    status: string;
}

export interface UserList {
    login: string;
    name: string;
    startDate: number,
    endDate: number;
    status: string;
}

export interface UsersResponse extends ResponseApi {
    users: Array<UserList>;
}

export interface UserRecordResponse extends ResponseApi {
    user: User;
}