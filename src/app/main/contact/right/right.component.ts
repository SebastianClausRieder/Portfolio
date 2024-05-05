import { Component, EventEmitter, Output, inject } from '@angular/core';
import { GlobalJSService } from '../../../global-js.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-right',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss', 'responsive.right.component.scss']
})
export class RightComponent {
  @Output() sendMailErrorEvent = new EventEmitter<void>();
  @Output() sendMailCompleteEvent = new EventEmitter<void>();

  globalJSData = inject(GlobalJSService);
  http = inject(HttpClient);

  contactData = {
    name: "",
    mail: "",
    message: ""
  }

  formValid: boolean | null = null;

  isValidName: boolean = false;
  isValidMail: boolean = false;
  isValidMessage: boolean = false;
  PPaccept: boolean = false;

  mailTest: boolean = false;

  english: any = {
    name: 'Your name',
    mail: 'Your email',
    message: 'Your message',
    text1: "I've read the",
    link: 'privacy policy',
    text2: 'and agree to the processing of my data as outlined.',
    request1: 'Please tell me your full name.',
    request2: 'Your email is required.',
    request3: 'Please describe your concerns to me.',
    request4: 'Please accept the privacy policy.',
    button: 'Send message'
  }

  german: any = {
    name: 'Ihr Name',
    mail: 'Ihre E-Mail',
    message: 'Ihre Nachricht',
    text1: "Ich habe die",
    link: 'Datenschutzrichtlinien',
    text2: 'gelesen und stimme ihnen zu.',
    request1: 'Bitte teilen Sie mir Ihren vollen Namen mit.',
    request2: 'Ihre E-Mail ist erforderlich.',
    request3: 'Bitte schildern Sie mir Ihr Anliegen.',
    request4: 'Bitte stimmen Sie den Datenschutzrichtlinien zu.',
    button: 'Nachricht Senden'
  }

  constructor() {

  }

  post = {
    endPoint: 'https://rieder-sebastian.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && this.PPaccept && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.PPaccept = false;
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
            this.sendMailErrorEvent.emit();
          },
          complete: () => {
            console.info('send post complete');
            this.sendMailCompleteEvent.emit();
          },
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.PPaccept = false;  
      ngForm.resetForm();
      this.sendMailCompleteEvent.emit();
    }    
  }
}