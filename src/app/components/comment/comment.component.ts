import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comment, CommentService } from '../../services/comments.service';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent {
  @Input() comment: Comment | undefined;
}
