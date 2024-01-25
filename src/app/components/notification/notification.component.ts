// notification.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  Notification,
  NotificationService,
} from '../../services/notification.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
})
export class NotificationComponent implements OnInit, OnDestroy {
  notification: Notification | null = null;
  private subscription!: Subscription;

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.subscription = this.notificationService.notifications.subscribe(
      (notification: Notification | null) => {
        this.notification = notification;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
