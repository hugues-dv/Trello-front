import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

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
export class CardsService {
  cards: Card[] | undefined = [];
  private apiUrl: string;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.apiUrl = configService.getApiUrl();
    this.cards = [];
  }
}
