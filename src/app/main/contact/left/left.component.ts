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
  }

  german: any = {
    ask: "Gibt es ein Problem, das wir gemeinsam lösen können?",
  }
}
