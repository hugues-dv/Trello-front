import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';

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

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiUrl}/projet`);
  }

  getProjectById(id: string): Observable<Project> {
    return this.http.get<Project>(`${this.apiUrl}/projet/${id}`);
  }

  createProject(project: Project) {
    return this.http.post(`${this.apiUrl}/projet`, project);
  }

  updateProject(project: Project) {
    return this.http.put(`${this.apiUrl}/projet/${project.id}`, project);
  }

  deleteProject(id: number) {
    return this.http.delete(`${this.apiUrl}/projet/${id}`);
  }
}
