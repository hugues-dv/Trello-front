import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';

export interface Comment {
  id: number;
  contenu: string;
  dateCreation: Date;
  idCarte: number;
  utilisateur: string;
}

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private apiUrl: string;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.apiUrl = configService.getApiUrl();
  }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.apiUrl}/commentaire`);
  }

  getCommentById(id: number): Observable<Comment> {
    return this.http.get<Comment>(`${this.apiUrl}/commentaire/${id}`);
  }

  createComment(comment: Comment) {
    return this.http.post(`${this.apiUrl}/commentaire`, comment);
  }

  updateComment(comment: Comment) {
    return this.http.put(`${this.apiUrl}/commentaire/${comment.id}`, comment);
  }

  deleteComment(id: number) {
    return this.http.delete(`${this.apiUrl}/commentaire/${id}`);
  }
}
