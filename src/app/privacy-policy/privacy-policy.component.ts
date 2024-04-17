import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent {
  scrollToTop() {
    const container = document.getElementById('top');
    if (container) {
      container.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}