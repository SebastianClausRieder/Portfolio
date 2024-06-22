import { Component, inject } from '@angular/core';
import { GlobalJSService } from '../global-js.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy-policy-en',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './privacy-policy-en.component.html',
  styleUrl: './privacy-policy-en.component.scss'
})
export class PrivacyPolicyENComponent {
  
  globalJSData = inject(GlobalJSService);

  ngOnInit(): void {
    window.scrollTo({ top: 0 });
  }

  ngAfterViewInit(): void {
    this.globalJSData.mainPage(false);
  }
}
