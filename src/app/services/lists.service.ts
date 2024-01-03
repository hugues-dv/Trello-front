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
}
