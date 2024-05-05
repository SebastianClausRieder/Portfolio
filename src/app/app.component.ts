import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { GlobalJSService } from './global-js.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    CommonModule,
    RouterOutlet,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'Sebastian Rieder Portfolio';

  globalJSData = inject(GlobalJSService);

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.globalJSData.windowWidth = window.innerWidth;
  }
}
