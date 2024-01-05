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
