import { HostListener, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalJSService {

  isGerman: boolean = false;
  mainPageOpen: boolean = true;
  windowWidth: number;
  
  storedValueLanguage: string | null = localStorage.getItem('isGerman');
  storedValueMainPage: string | null = localStorage.getItem('mainPage');

  private toggleMenuSubject = new Subject<void>();
  toggleMenu$: Observable<void> = this.toggleMenuSubject.asObservable(); 

  constructor() {
    this.loadLocalStorage();
    this.windowWidth = window.innerWidth;
  }

  goTo(link: string) {
    window.open(link);
  }

  changeLanguage(language: boolean) {
    this.isGerman = language;
    
    localStorage.setItem('isGerman', JSON.stringify(language));
  }

  mainPage(page: boolean) {
    this.mainPageOpen = page;
    
    localStorage.setItem('mainPage', JSON.stringify(page));
  }

  loadLocalStorage() {
    if (this.storedValueLanguage !== null) {
      this.isGerman = JSON.parse(this.storedValueLanguage);
    }

    if (this.storedValueMainPage !== null) {
      this.mainPageOpen = JSON.parse(this.storedValueMainPage);
    }
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

  scrollToContact() {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToStart() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  openOutlookEmail(emailAddress: string): void {
    const mailtoLink = `mailto:${emailAddress}`;
    window.open(mailtoLink);
  }

  ngOnInit(): void {
    window.scrollTo({ top: 0 });
  }
}