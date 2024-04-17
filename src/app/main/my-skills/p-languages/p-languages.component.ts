import { Component, inject } from '@angular/core';
import { GlobalJSService } from '../../../global-js.service';

@Component({
  selector: 'app-p-languages',
  standalone: true,
  imports: [],
  templateUrl: './p-languages.component.html',
  styleUrl: './p-languages.component.scss'
})
export class PLanguagesComponent {

  globalJSData = inject(GlobalJSService);

  english: any = {
    text1: 'Programming languages I work with.',
    text2: 'Applications that I use.'
  }

  german: any = {
    text1: 'Programmiersprachen, mit denen ich arbeite.',
    text2: 'Anwendungen, die ich verwende.'
  }
}
