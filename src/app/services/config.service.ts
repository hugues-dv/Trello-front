import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor() {}

  getApiUrl(): string {
    return `${environment.domain}:${environment.port}`;
  }
}
