import { Component, inject } from '@angular/core';
import { GlobalJSService } from '../../../global-js.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills-headline',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './skills-headline.component.html',
  styleUrl: './skills-headline.component.scss'
})
export class SkillsHeadlineComponent {

  globalJSData = inject(GlobalJSService);

  english: any = {
    text1: 'My skills',
    text2: 'I have gained experience in building projects with various front end technologies and concepts.',
    button: 'Get in touch'
  }

  german: any = {
    text1: 'Programmier- Expertise',
    text2: 'Ich habe Erfahrung im Aufbau von Projekten mit verschiedenen Frontend-Technologien und Konzepten gesammelt.',
    button: 'In kontakt treten'
  }
}
