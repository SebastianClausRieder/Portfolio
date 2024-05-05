import { Component, inject } from '@angular/core';
import { ProfilComponent } from './profil/profil.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { GlobalJSService } from '../global-js.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    ProfilComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    ContactComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  globalJSData = inject(GlobalJSService);

}
