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
  @Input()
  cardId!: number; // Propriété pour l'ID de la carte
  card!: Card; // Stockage des détails de la carte
  comments!: Comment[]; // Tableau pour stocker les commentaires

  constructor(
    private cardService: CardService,
    private commentService: CommentService
  ) {}

  ngOnInit() {
    this.cardService.getCardById(this.cardId).subscribe((card: Card) => {
      this.card = card;
      // Chargez les commentaires pour cette carte si nécessaire
      this.loadComments();
    });
  }

  loadComments() {
    this.commentService
      .getCommentByCardId(this.cardId)
      .subscribe((comments: Comment[]) => {
        this.comments = comments;
      });
  }
}
