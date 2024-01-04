import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

export interface List {
  id: number;
  nom: string;
  idProject: number;
}

@Injectable({
  providedIn: 'root',
})
export class ListsService {
  lists: List[] | undefined = [];
  private apiUrl: string;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.apiUrl = configService.getApiUrl();
    this.lists = [];
  }

  getLists() {
    return this.http.get(`${this.apiUrl}/liste`);
  }

  getListById(id: string) {
    return this.http.get(`${this.apiUrl}/liste/${id}`);
  }

  createList(list: List) {
    return this.http.post(`${this.apiUrl}/liste`, list);
  }

  updateList(list: List) {
    return this.http.put(`${this.apiUrl}/liste/${list.id}`, list);
  }

  deleteList(id: string) {
    return this.http.delete(`${this.apiUrl}/liste/${id}`);
  }
}
