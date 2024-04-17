import { Component, inject } from '@angular/core';
import { GlobalJSService } from '../../../global-js.service';

@Component({
  selector: 'app-about-me-text',
  standalone: true,
  imports: [],
  templateUrl: './about-me-text.component.html',
  styleUrl: './about-me-text.component.scss'
})
export class AboutMeTextComponent {

  globalJSData = inject(GlobalJSService);

  english: any = {
    headline: 'About me',

    aboutMe: {
      z1: "My name is Sebastian Rieder, born in 1986 in Vienna.",
      z2: "I'm 37 years old and by the side of a wonderful woman for 8 years.",
      z3: "I've been living in Dippoldiswalde in Sachsen since 2022."
    },

    myWay: {
      z1: "In 2005, I graduated as a chef and attained certification",
      z2: "as a restaurant specialist in 2007. With twenty years of",
      z3: "professional experience in the hospitality industry,",
      z4: "I have held various roles. In early 2023, I embarked",
      z5: "on the journey to pursue training as a full-stack developer."
    },

    thoughts: {
      z1: "Programming embodies boundless freedom as the horizons",
      z2: "of our imagination expand. It is the art shaping our",
      z3: "technological future, whether through innovation,",
      z4: "children's toys, or autonomous driving systems.",
    }
  }

  german: any = {
    headline: 'Über mich',

    aboutMe: {
      z1: "Mein Name ist Sebastian Rieder, geboren 1986 in Wien.",
      z2: "Ich bin 37 Jahre alt und seit 8 Jahren an der Seite einer wundervollen Frau.",
      z3: "Seit 2022 lebe ich in Dippoldiswalde in Sachsen."
    },

    myWay: {
      z1: "Im Jahr 2005 habe ich meinen Abschluss als Koch gemacht und",
      z2: "2007 den Abschluss zum Restaurantfachmann.",
      z3: "Mit 20 Jahren Berufserfahrung in der Gastronomie habe ich",
      z4: "vielfältige Rollen inne. Anfang 2023 begab ich mich auf den Weg,",
      z5: "eine Ausbildung zum Full-Stack Developer zu absolvieren."
    },

    thoughts: {
      z1: "Die Programmierung verkörpert grenzenlose Freiheit, während",
      z2: "sich die Horizonte unserer Vorstellungskraft ausdehnen. Es ist",
      z3: "die Kunstformung unserer technologischen Zukunft, sei es durch",
      z4: "Innovation, Spielzeug für Kinder oder autonome Fahrsysteme."
    }
  }

}
