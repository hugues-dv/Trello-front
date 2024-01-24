import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';

export interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl: string;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.apiUrl = configService.getApiUrl();
  }

  login(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/user/login`, user);
  }

  register(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/user/register`, user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/user`);
  }

  getUser(username?: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/user/${username}`);
  }

  createUser(user: User) {
    return this.http.post(`${this.apiUrl}/user`, user);
  }

  updateUser(user: User) {
    return this.http.put(`${this.apiUrl}/user/${user.username}`, user);
  }

  deleteUser(username: string) {
    return this.http.delete(`${this.apiUrl}/user/${username}`);
  }
}
