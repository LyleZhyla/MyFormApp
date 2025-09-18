import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-banks-and-cards',
  templateUrl: './banks-and-cards.page.html',
  styleUrls: ['./banks-and-cards.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule],
})
export class BanksAndCardsPage {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      bankName: ['', Validators.required],
      cardholder: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{16}$/)]],
      expiry: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\d{2}$/)]],
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3,4}$/)]],
    });
  }

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const cardNumber = this.form.value.cardNumber;
    const maskedNumber = `**** **** **** ${cardNumber?.slice(-4)}`;

    alert(
      'Card saved (demo only):\n' +
        JSON.stringify({ ...this.form.value, cardNumber: maskedNumber }, null, 2)
    );
  }
}
