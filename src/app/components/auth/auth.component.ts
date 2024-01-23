import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../services/users.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  username!: string;

  signIn() {}
}
