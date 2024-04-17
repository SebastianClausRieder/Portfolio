import { Component, EventEmitter, Output, inject } from '@angular/core';
import { GlobalJSService } from '../../../global-js.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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

  formValid: string = "";

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
    request1: 'Your name is required.',
    request12: 'Your full name should have more than 4 characters.',
    request2: 'Your email is required.',
    request3: 'Your message is empty.',
    request32: 'Please describe your concerns to me.',
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
    request1: 'Ihr Name ist erforderlich.',
    request12: 'Ihr voller Name sollte mehr als 4 Zeichen haben.',
    request2: 'Ihre E-Mail ist erforderlich.',
    request3: 'Ihre Nachricht ist leer.',
    request32: 'Bitte schildern Sie mir Ihr Anliegen.',
    request4: 'Bitte stimmen Sie den Datenschutzrichtlinien zu.',
    button: 'Nachricht Senden'
  }

  element(inputID: string): HTMLElement | null  {
    return document.getElementById(inputID);
  }

  formValidationName() {
    const nameInput = this.element("name");

    this.contactData.name = "";

    if (nameInput instanceof HTMLInputElement) { this.contactData.name = nameInput.value; }

    this.isValidName = this.contactData.name.length < 5 ? false : true;
  }

  formValidationMail() {
    const mailInput = this.element("mail");

    this.contactData.mail = "";

    if (mailInput instanceof HTMLInputElement) { this.contactData.mail = mailInput.value.trim(); }

    this.isValidMail = !this.isValidEmail(this.contactData.mail) ? false : true;
  }

  isValidEmail(email: string) {
    const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
    return emailPattern.test(email);
  }

  formValidationMessage() {
    const messageInput = this.element("message");

    this.contactData.message = "";

    if (messageInput instanceof HTMLTextAreaElement) { this.contactData.message = messageInput.value; }

    this.isValidMessage = this.contactData.message.length < 10 ? false : true;
  }

  checkAllVariables(): boolean {
    return this.isValidName && this.isValidMail && this.isValidMessage && this.PPaccept;
  }

  sendMail() {
    if (!this.checkAllVariables()) {
      this.formValid = "not ok";
    } else { this.formValid = "ok"; }
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

  onSubmit() {
    if (this.formValid === "ok" && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.resetContactData();
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
    } else if (this.formValid === "ok" && this.mailTest) {
      this.resetContactData();
    }
  }

  resetContactData() {
    this.contactData = {
      name: "",
      mail: "",
      message: ""
    }

    this.PPaccept = false;
  }
}
