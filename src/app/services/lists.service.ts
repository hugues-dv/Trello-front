import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';

export interface List {
  id: number;
  name: string;
  idProject: number;
}

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private apiUrl: string;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.apiUrl = configService.getApiUrl();
  }

  getLists(): Observable<List[]> {
    return this.http.get<List[]>(`${this.apiUrl}/liste`);
  }

  getListById(id: number): Observable<List> {
    return this.http.get<List>(`${this.apiUrl}/liste/${id}`);
  }

  getListByProjectId(projectId: number): Observable<List> {
    return this.http.get<List>(`${this.apiUrl}/liste?projectId=${projectId}`);
  }

  createList(list: List) {
    return this.http.post(`${this.apiUrl}/liste`, list);
  }

  updateList(list: List) {
    return this.http.put(`${this.apiUrl}/liste/${list.id}`, list);
  }

  deleteList(id: number) {
    return this.http.delete(`${this.apiUrl}/liste/${id}`);
  }
}
