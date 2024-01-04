import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';

export interface Card {
  id: number;
  titre: string;
  description: string;
  dateCreation: Date;
  idListe: number;
}

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private apiUrl: string;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.apiUrl = configService.getApiUrl();
  }

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.apiUrl}/carte`);
  }

  getCardById(id: string): Observable<Card> {
    return this.http.get<Card>(`${this.apiUrl}/carte/${id}`);
  }

  createCard(card: Card) {
    return this.http.post(`${this.apiUrl}/carte`, card);
  }

  updateCard(card: Card) {
    return this.http.put(`${this.apiUrl}/carte/${card.id}`, card);
  }

  deleteCard(id: number) {
    return this.http.delete(`${this.apiUrl}/carte/${id}`);
  }
}
