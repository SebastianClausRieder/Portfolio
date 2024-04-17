import { Component, inject } from '@angular/core';
import { GlobalJSService } from '../../global-js.service';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    LeftComponent,
    RightComponent
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', 'responsive.contact.component.scss']
})

export class ContactComponent {

  globalJSData = inject(GlobalJSService);

  dialogOpen: boolean = false;
  mailIsSend: boolean = true;

  english: any = {
    headline: 'Contact',
    headlineOk: 'Email sent!',
    headlineNotOk: 'Error sending!',
    z1TextOk: 'Your email has been sent.',
    z2TextOk: 'I will contact you.',
    z1TextNotOk: 'Something went wrong while sending.',
    z2TextNotOk: 'Please try again later.',
  }

  german: any = {
    headline: 'Kontakt',
    headlineOk: 'E-Mail gesendet!',
    headlineNotOk: 'Fehler beim Senden!',
    z1TextOk: 'Ihre Mail wurde gesendet.',
    z2TextOk: 'Ich werde mich mit Ihnen in Verbindung setzen.',
    z1TextNotOk: 'Beim Senden ist etwas schiefgegangen.',
    z2TextNotOk: 'Bitte versuchen Sie es später erneut.',
  }

  sendMailError() {
    console.log('Mail sending error occurred in ContactComponent');
    this.dialogOpen = true;
    this.mailIsSend = false;
  }

  sendMailComplete() {
    console.log('Mail sending completed in ContactComponent');
    this.dialogOpen = true;
    this.mailIsSend = true;
  }

  closeDialog() {
    this.dialogOpen = false;
  }
}
