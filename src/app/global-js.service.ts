import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalJSService {

  isGerman: boolean = false;
  windowWidth: number;

  private toggleMenuSubject = new Subject<void>();
  toggleMenu$: Observable<void> = this.toggleMenuSubject.asObservable(); 

  constructor() {
    
    const storedValue: string | null = localStorage.getItem('isGerman');
    if (storedValue !== null) {
      this.isGerman = JSON.parse(storedValue);
    }

    this.windowWidth = window.innerWidth;
  }

  goTo(link: string) {
    window.open(link);
  }

  changeLanguage(language: boolean) {
    this.isGerman = language;
    
    localStorage.setItem('isGerman', JSON.stringify(language));
  }

  scrollToSection(level: string): void {
    switch (level) {
      case 'about':
        document.querySelector('#aboutMe')?.scrollIntoView({ behavior: 'smooth' });
        this.hideButtonContain();
        break;
      case 'skills':
        document.querySelector('#mySkills')?.scrollIntoView({ behavior: 'smooth' });
        this.hideButtonContain();
        break;
      case 'portfolio':
        document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
        this.hideButtonContain();
        break;
      case 'contact':
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
        this.hideButtonContain();
        break;
      case 'start':
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.hideButtonContain();
        break;
      default:
        console.error('Invalid level:', level);
    }
  }

  hideButtonContain() {
    if (this.windowWidth < 1300) {
      this.toggleMenuSubject.next();
    }
  }

  openOutlookEmail(emailAddress: string): void {
    const mailtoLink = `mailto:${emailAddress}`;
    window.open(mailtoLink);
  }
}