import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../services/users.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  projects!: User;
}
