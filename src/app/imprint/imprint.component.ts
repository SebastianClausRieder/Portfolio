import { Component, inject } from '@angular/core';
import { GlobalJSService } from '../global-js.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [
  ],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

  globalJSData = inject(GlobalJSService);

  english: any = {
    headline: "Imprint",
    adress: "Adress",

    contact: {
      headline: "Contact",
      z1: "Phone"
    },

    legal: {
      headline: "Editorially responsible",
      z1: "Operator of the website"
    },

    sources: {
      headline: "Sources",
      z1: "Icons made by"
    }
  }

  german: any = {
    headline: "Impressum",
    adress: "Adresse",
    
    contact: {
      headline: "Kontakt",
      z1: "Telefon"
    },

    legal: {
      headline: "Redaktionell verantwortlich",
      z1: "Betreiber der Website"
    },

    sources: {
      headline: "Quellen",
      z1: "Icons erstellt von"
    }
  }

  ngOnInit(): void {
    window.scrollTo({ top: 0 });
  }

  ngAfterViewInit(): void {
    this.globalJSData.mainPage(false);
  }
}
