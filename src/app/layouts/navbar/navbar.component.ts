import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeServiceService } from '../../core/services/ThemeService/theme-service.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isMenuOpen = false;
  private readonly themeServiceService = inject(ThemeServiceService);

  toggleTheme() {
    this.themeServiceService.toggleTheme();
  }

  get isDark(): boolean {
    return this.themeServiceService.getCurrentTheme() === 'dark';
  }
}
