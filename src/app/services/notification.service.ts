import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Notification {
  message: string;
  type: 'success' | 'error';
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notificationSubject = new BehaviorSubject<Notification | null>(null);
  public notifications = this.notificationSubject.asObservable();

  constructor() {}

  showSuccess(message: string) {
    this.notificationSubject.next({ message, type: 'success' });
    this.hideAfterDelay();
  }

  showError(message: string) {
    this.notificationSubject.next({ message, type: 'error' });
    this.hideAfterDelay();
  }

  private hideAfterDelay() {
    setTimeout(() => this.notificationSubject.next(null), 3000);
  }
}
