import { Component, inject } from '@angular/core';
import { GlobalJSService } from '../../global-js.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', './responsive.footer.component.scss']
})
export class FooterComponent {

  globalJSData = inject(GlobalJSService);

  english: any = {
    button0: 'Privacy Policy',
    button1: 'Imprint'
  }

  german: any = {
    button0: 'Datenschutzrichtlinien',
    button1: 'Impressum'
  }
}