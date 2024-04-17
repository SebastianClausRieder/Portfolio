import { Component, inject } from '@angular/core';
import { GlobalJSService } from '../../../global-js.service';

@Component({
  selector: 'app-left',
  standalone: true,
  imports: [],
  templateUrl: './left.component.html',
  styleUrl: './left.component.scss'
})
export class LeftComponent {

  globalJSData = inject(GlobalJSService);

  english: any = {
    ask: "Is there a problem we can solve together?",

    text1: {
      z1: "Contact me using this form. I would be happy to hear from you",
      z2: "and learn more about your ideas in order to actively support them with my skills."
    },

    text2: "Are you looking for a Frontend Developer?",
    text3: "Contact Me!"
  }

  german: any = {
    ask: "Gibt es ein Problem, das wir gemeinsam lösen können?",

    text1: {
      z1: "Kontaktieren Sie mich über dieses Formular. Ich würde mich freuen, von Ihnen zu hören",
      z2: "und mehr über Ihre Ideen zu erfahren, um diese mit meinen Fähigkeiten tatkräftig zu unterstützen."
    },

    text2: "Suchen Sie einen Frontend Developer?",
    text3: "Kontaktieren Sie mich!"
  }
}
