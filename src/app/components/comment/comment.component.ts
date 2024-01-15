import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comment, CommentService } from '../../services/comments.service';
import { CardComponent } from '../card/card.component';
@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent {
  @Input()
  comment: Comment | undefined;
}
