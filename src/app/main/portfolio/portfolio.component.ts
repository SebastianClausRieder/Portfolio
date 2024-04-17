import { Component, inject } from '@angular/core';
import { Headline2Component } from './headline2/headline2.component';
import { ProjectOneComponent } from './project-one/project-one.component';
import { GlobalJSService } from '../../global-js.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    Headline2Component,
    ProjectOneComponent
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  
  globalJSData = inject(GlobalJSService);

  english: string = 'Explore a selection of my work here - Interact with projects to see my skills in action.';
  german: string = 'Entdecken Sie hier eine Auswahl meiner Arbeiten. Interagieren Sie mit Projekten, um meine Fähigkeiten in Aktion zu sehen.';

}
