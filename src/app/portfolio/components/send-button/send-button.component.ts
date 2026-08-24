import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SharedDataService } from '@app/services/shared-data.service';

import emailjs from '@emailjs/browser';
import { environment } from '@env/environment';

@Component({
  selector: 'portfolio-send-button',
  imports: [CommonModule],
  templateUrl: './send-button.component.html',
  styleUrl: './send-button.component.css'
})
export class SendButtonComponent {
  buttonText: string = 'Enviar';
  timer: number = 3;
  togglePopup: boolean = false;


  constructor(private router: Router, private sharedData: SharedDataService) {}
  async sendForm(event: Event) {

    event.preventDefault();
    const data = this.sharedData.getCurrentData();
    const { email, description } = data;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email || !emailRegex.test(email.trim())) {
    alert('Por favor, ingresa un correo electrónico válido.');
    return;
    }
    if (!description || description.trim() === '') {
    alert('Por favor, ingresa un mensaje antes de enviar.');
    return;
    }

    const templateParams = {
      user_email: email,
      subject: "Correo de Portafolio - " + email,
      message: description
    };

    try { 
      await emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        templateParams,
        environment.emailjs.publicKey
      );
    } catch (error) {
      console.error('Error al enviar:', error);
      alert('Ocurrió un error al enviar el mensaje.');
      return
    }

    this.buttonText = 'Enviado';
    this.showPopup();      
  
  }
  showPopup() {
    this.togglePopup = true;
  }
  closePopup() {
    this.togglePopup = false;
    this.router.navigate(['/portfolio']);
  }
}
