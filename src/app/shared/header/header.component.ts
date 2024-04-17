import { Component, inject } from '@angular/core';
import { GlobalJSService } from '../../global-js.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', 'responsive.header.component.scss']
})
export class HeaderComponent {

  globalJSData = inject(GlobalJSService);
  lastScrollTop: number = 0;
  isMenuOpen: boolean = false;

  private toggleMenuSubscription!: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.toggleMenuSubscription = this.globalJSData.toggleMenu$.subscribe(() => {
      this.toggleMenu();
    });
  }

  ngAfterViewInit(): void {
    this.makeElementVisibleOnScroll();
  }

  ngOnDestroy(): void {
    this.toggleMenuSubscription.unsubscribe();
  }

  english: any = {
    button0: 'Top',
    button1: 'About me',
    button2: 'Skills',
    button3: "Contact"
  }

  german: any = {
    button0: 'Beginn',
    button1: 'Über mich',
    button2: 'Expertise',
    button3: 'Kontakt'
  }

  makeElementVisibleOnScroll(): void {
    const targetElement: any = document.getElementById('top');

    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      const triggerOffset = 950;

      if (scrollPosition > triggerOffset) {
        targetElement.style.visibility = 'visible';
      } else {
        targetElement.style.visibility = 'hidden';
      }
      
      if (currentScroll > this.lastScrollTop) {
        document.getElementById("navbar")?.classList.add("navbar-hidden");
      } else {
        document.getElementById("navbar")?.classList.remove("navbar-hidden");
      }

      this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
  }

  toggleMenu() {
    const menu = document.querySelector('.burger-menu');
    const btnContain = document.getElementById('btnContain');
    if (menu !== null) {
      menu.classList.toggle('open');
      this.isMenuOpen = !this.isMenuOpen;
      setTimeout(() => {
          if (btnContain !== null) {
            btnContain.classList.toggle('show-btns');
          }
      }, 1);
    }
  }
}
