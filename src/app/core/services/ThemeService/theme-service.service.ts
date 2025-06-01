import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeServiceService {
  private themeKey = 'theme';
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    this.loadTheme();
  }

  toggleTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      const isDark = document.body.classList.toggle('dark');
      localStorage.setItem(this.themeKey, isDark ? 'dark' : 'light');
    }
  }

  setTheme(theme: 'light' | 'dark') {
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.toggle('dark', theme === 'dark');
      localStorage.setItem(this.themeKey, theme);
    }
  }

  getCurrentTheme(): 'light' | 'dark' {
    if (isPlatformBrowser(this.platformId)) {
      return document.body.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'light'; // default for server
  }

  private loadTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem(this.themeKey);
      if (saved === 'dark') {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    }
  }
}
