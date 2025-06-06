import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements AfterViewInit {
  private readonly pLATFORM_ID = inject(PLATFORM_ID);
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.pLATFORM_ID)) {
      AOS.init({
        offset: 100, // offset (in px) from the original trigger point
        duration: 800, // animation duration
        easing: 'ease-in-out',
        delay: 100,
        once: false, // animate on every scroll
        mirror: true, // animate out when scrolling past the element
      });
      AOS.refresh();
    }
  }
}
