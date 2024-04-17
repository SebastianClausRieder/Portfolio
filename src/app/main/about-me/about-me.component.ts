import { Component } from '@angular/core';
import { AboutMeTextComponent } from './about-me-text/about-me-text.component';
import { AboutMePhotoComponent } from './about-me-photo/about-me-photo.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    AboutMeTextComponent,
    AboutMePhotoComponent
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
