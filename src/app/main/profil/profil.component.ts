import { Component, inject } from '@angular/core';
import { GlobalJSService } from '../../global-js.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss', 'responsive.profil.component.scss']
})
export class ProfilComponent {

  globalJSData = inject(GlobalJSService);

  english: any = {
    text1: 'I am',
    text2: 'Scroll down',
    button: "Let's talk!"
  }

  german: any = {
    text1: "I bin",
    text2: 'Runterscrollen',
    button: 'Lass uns reden!'
  }
}
