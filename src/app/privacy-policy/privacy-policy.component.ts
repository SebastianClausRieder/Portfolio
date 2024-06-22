import { Component, inject } from '@angular/core';
import { GlobalJSService } from '../global-js.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [
  ],
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent {
  
  globalJSData = inject(GlobalJSService);

  scrollToTop() {
    const container = document.getElementById('top');
    if (container) {
      container.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  ngOnInit(): void {
    window.scrollTo({ top: 0 });
  }

  ngAfterViewInit(): void {
    this.globalJSData.mainPage(false);
  }
}