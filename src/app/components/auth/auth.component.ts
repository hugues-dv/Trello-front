import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User, UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../services/notification.service';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule, NotificationComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  user: User = {
    username: '',
    password: '',
  };
  confirmPassword!: string;
  toSignUp: boolean = false;

  constructor(
    public userService: UserService,
    private notificationService: NotificationService
  ) {}

  signUp() {
    if (this.user.password === this.confirmPassword) {
      this.userService.register(this.user).subscribe({
        next: (res) => {
          this.changeSignType();
          this.notificationService.showSuccess('Successfully registered !');
        },
        error: (err) => {
          this.notificationService.showError(err.message);
        },
      });
    } else {
      this.notificationService.showError(
        'Password different from confirme password.'
      );
    }
  }

  signIn() {
    this.userService.login(this.user).subscribe({
      next: (res) => {
        localStorage.setItem('jwt', res.token);
      },
      error: (err) => {
        console.log('test');
        this.notificationService.showError('Username or password incorrect !');
      },
    });
  }

  changeSignType() {
    this.toSignUp = !this.toSignUp;
  }
}
