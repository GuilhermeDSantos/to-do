import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlCleanerService {

  constructor() { }

  cleanUrl(url: string): string {
    try {
      const parsedUrl = new URL(url);

      return parsedUrl.hostname;
    } catch (error) {
      return "";
    }
  }
}
