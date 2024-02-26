import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserFilterRequest, UserRecordResponse, UsersResponse } from '../model/user.model';
import { Observable } from 'rxjs';
import { ResponseApi } from '../model/response.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers(userFilterRequest: UserFilterRequest): Observable<UsersResponse> {
    return this.http.post<UsersResponse>('/api/user/list', userFilterRequest);
  }

  public addUser(user: User): Observable<ResponseApi> {
    return this.http.post<ResponseApi>('/api/user', user);
  }

  public getUser(id: string): Observable<UserRecordResponse> {
    return this.http.get<UserRecordResponse>('api/user/'.concat(id));
  }

  public editUser(user: User): Observable<ResponseApi> {
    return this.http.put<ResponseApi>('/api/user', user);
  }

  public revokeUser(id: string): Observable<ResponseApi> {
    return this.http.delete<UserRecordResponse>('api/user/'.concat(id));
  }
}
