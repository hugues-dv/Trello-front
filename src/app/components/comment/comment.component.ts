import { Component, Input, OnInit } from '@angular/core';
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

  ngOnInit() {}
}
