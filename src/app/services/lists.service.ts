import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';

export interface List {
  id?: number;
  name: string;
  idProject?: number;
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
    return this.http.get<List[]>(`${this.apiUrl}/list`);
  }

  getListById(id: number): Observable<List> {
    return this.http.get<List>(`${this.apiUrl}/list/${id}`);
  }

  getListByProjectId(projectId?: number): Observable<List> {
    return this.http.get<List>(`${this.apiUrl}/list?projectId=${projectId}`);
  }

  createList(list: List) {
    return this.http.post(`${this.apiUrl}/list`, list);
  }

  updateList(list: List) {
    return this.http.put(`${this.apiUrl}/list/${list.id}`, list);
  }

  deleteList(id: number) {
    return this.http.delete(`${this.apiUrl}/list/${id}`);
  }
  getListes() {
    return this.http.get(`${this.apiUrl}/listes`);
  }

  getListeById(id: number) {
    return this.http.get<List>(`${this.apiUrl}/listes/${id}`);
  }

  createListe(liste: List) {
    return this.http.post(`${this.apiUrl}/listes`, liste);
  }

  updateListe(liste: List) {
    return this.http.put(`${this.apiUrl}/listes/${liste.id}`, liste);
  }

  deleteListe(id: string) {
    return this.http.delete(`${this.apiUrl}/listes/${id}`);
  }
}
