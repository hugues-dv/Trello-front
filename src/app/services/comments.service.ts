import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';

export interface Comment {
  id?: number;
  content: string;
  createdAt: Date;
  idCard?: number;
  user: string;
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
    return this.http.get<Comment[]>(`${this.apiUrl}/comment`);
  }

  getCommentById(id?: number): Observable<Comment> {
    return this.http.get<Comment>(`${this.apiUrl}/comment/${id}`);
  }

  getCommentByCardId(cardId?: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.apiUrl}/comment?idCard=${cardId}`);
  }

  createComment(comment: Comment) {
    return this.http.post(`${this.apiUrl}/comment`, comment);
  }

  updateComment(comment: Comment) {
    return this.http.put(`${this.apiUrl}/comment/${comment.id}`, comment);
  }

  deleteComment(id: number) {
    return this.http.delete(`${this.apiUrl}/comment/${id}`);
  }
}
