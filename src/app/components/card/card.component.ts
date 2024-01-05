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
    title: "Reunio d'équipe",
    description: "Sprint 1",
    createdAt: new Date(Date.now()),
    idList: 3,
  }
}
