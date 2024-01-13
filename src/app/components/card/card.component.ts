import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comment, CommentService } from '../../services/comments.service';
import { Card, CardService } from '../../services/cards.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  constructor(
    private cardService: CardService,
    private commentService: CommentService
  ) {}
  @Input()
  card!: Card; // Stockage des détails de la carte
  listId!: number; // Propriété pour l'ID de la liste
  cardId!: number; // Propriété pour l'ID de la carte
  cards!: Card[]; // Stockage des détails des cartes
  comments!: Comment[]; // Tableau pour stocker les commentaires

  ngOnInit() {}

  loadComments() {
    if (this.card) {
      this.commentService
        .getCommentByCardId(this.card.id)
        .subscribe((comments: Comment[]) => {
          this.comments = comments;
        });
    }
  }
}
