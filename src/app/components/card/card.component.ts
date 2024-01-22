import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comment, CommentService } from '../../services/comments.service';
import { Card, CardService } from '../../services/cards.service';
import { CommentComponent } from '../comment/comment.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, CommentComponent, FormsModule],
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
  comment!: Comment; // stockage d'un commentaire
  commentText: string = 'ajoutez un commentaire';
  @Output() rmCard = new EventEmitter<any>();

  ngOnInit() {
    if (this.card) {
      this.commentService
        .getCommentByCardId(this.card.id)
        .subscribe((comments: Comment[]) => {
          this.comments = comments;
        });
    }
  }
  addComment() {
    this.commentService
      .createComment({
        content: this.commentText,
        createdAt: new Date(),
        idCard: this.card.id,
        user: 'user',
      })
      .subscribe((comment: any) => {
        this.comments.push(comment);
      });
  }
  updateCard() {
    this.cardService.updateCard(this.card).subscribe(() => {});
  }

  getCardById() {
    this.cardService.getCardById(this.card.id).subscribe((card: Card) => {
      this.card = card;
    });
  }
  removeCard() {
    // Envoie la card à supprimer au composant parent en déclenchant un event car impossible de mettre à jour
    // l'affichage des cards depuis ce composant. Je peux le supprimer en bdd mais pas mettre à jour l'affichage
    // sans recharger la page.
    this.rmCard.emit(this.card);
  }
  // deleteCard(card: Card) {
  //   if (this.card.id) {
  //     this.cardService.deleteCard(card.id).subscribe(() => {
  //       this.cards = this.cards.filter(
  //         (actualCard) => actualCard.id !== card.id
  //       );
  //     });
  //   }
  // }
}
