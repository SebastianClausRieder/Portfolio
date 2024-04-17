import { Component, inject } from '@angular/core';
import { GlobalJSService } from '../../global-js.service';
import { PLanguagesComponent } from './p-languages/p-languages.component';
import { SkillsHeadlineComponent } from './skills-headline/skills-headline.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [
    CommonModule,
    PLanguagesComponent,
    SkillsHeadlineComponent
  ],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  globalJSData = inject(GlobalJSService);

  english: any = {
    button: 'Get in touch'
  }

  german: any = {
    button: 'In kontakt treten'
  }
}
