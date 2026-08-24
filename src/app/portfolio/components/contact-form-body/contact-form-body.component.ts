import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SendButtonComponent } from '../send-button/send-button.component';
import { SharedDataService } from '@app/services/shared-data.service';


@Component({
  selector: 'portfolio-contact-form-body',
  imports: [SendButtonComponent,FormsModule],
  templateUrl: './contact-form-body.component.html',
  styleUrl: './contact-form-body.component.css'
})
export class ContactFormBodyComponent {
  email = '';
  description = '';

  constructor(private sharedData: SharedDataService) {}

  onInputChange() {
    this.sharedData.updateFormData({
      email: this.email,
      description: this.description
    });
  }
}
