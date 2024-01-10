import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';

export interface Card {
  id?: number;
  title: string;
  description: string;
  createdAt: Date;
  idList?: number;
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
    return this.http.get<Card[]>(`${this.apiUrl}/card`);
  }

  getCardById(id?: number): Observable<Card> {
    return this.http.get<Card>(`${this.apiUrl}/card/${id}`);
  }

  getCardByListId(listId?: number): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.apiUrl}/card?listId=${listId}`);
  }

  createCard(card: Card) {
    return this.http.post(`${this.apiUrl}/card`, card);
  }

  updateCard(card: Card) {
    return this.http.put(`${this.apiUrl}/card/${card.id}`, card);
  }

  deleteCard(id: number) {
    return this.http.delete(`${this.apiUrl}/card/${id}`);
  }
}
