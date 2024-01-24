import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';
import { AuthComponent } from './components/auth/auth.component';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProjectsComponent, AuthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isLoggedIn(): boolean {
    try {
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem('jwt');
        if (!token) return false;

        const decoded: any = jwtDecode(token);
        const isTokenExpired = decoded.exp < Date.now() / 1000;
        return !isTokenExpired;
      } else return false;
    } catch (error) {
      console.error('Erreur de décodage du JWT :', error);
      return false;
    }
  }
}
