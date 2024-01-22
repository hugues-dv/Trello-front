import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comment, CommentService } from '../../services/comments.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent implements OnInit {
  @Input()
  comment!: Comment;
  @Output() rmComment = new EventEmitter<any>();

  ngOnInit() {}
  removeComment() {
    // Envoie la comment à supprimer au composant parent en déclenchant un event car impossible de mettre à jour
    // l'affichage des comments depuis ce composant. Je peux le supprimer en bdd mais pas mettre à jour l'affichage
    // sans recharger la page.
    this.rmComment.emit(this.comment);
  }
}
