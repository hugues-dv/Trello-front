import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

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

  getComments() {
    return this.http.get(`${this.apiUrl}/commentaire`);
  }

  getCommentById(id: string) {
    return this.http.get(`${this.apiUrl}/commentaire/${id}`);
  }

  createComment(comment: Comment) {
    return this.http.post(`${this.apiUrl}/commentaire`, comment);
  }

  updateComment(comment: Comment) {
    return this.http.put(`${this.apiUrl}/commentaire/${comment.id}`, comment);
  }

  deleteComment(id: string) {
    return this.http.delete(`${this.apiUrl}/commentaire/${id}`);
  }
}
