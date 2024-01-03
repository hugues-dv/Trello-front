import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

export interface Project {
  id: number;
  nom: string;
  description: string;
  dateCreation: Date;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private apiUrl: string;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.apiUrl = configService.getApiUrl();
  }
}
