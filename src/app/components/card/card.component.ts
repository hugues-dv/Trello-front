import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../../services/cards.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  card:Card = {
    id: 1,
    titre: "Reunio d'équipe",
    description: "Sprint 1",
    dateCreation: new Date(Date.now()),
    idListe: 3,
  }
}
