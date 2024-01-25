import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User, UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  user: User = {
    username: '',
    password: '',
  };
  confirmPassword!: string;
  toSignUp: boolean = true;

  constructor(public userService: UserService) {}

  signUp() {
    if (this.user.password === this.confirmPassword) {
      this.userService.register(this.user).subscribe((res) => {
        console.log('Sign up successfull');
      });
    }
  }

  signIn() {
    this.userService.login(this.user).subscribe((res) => {
      localStorage.setItem('username', this.user.username);
      localStorage.setItem('jwt', res.token);
    });
  }

  changeSignType() {
    this.toSignUp = !this.toSignUp;
  }
}
