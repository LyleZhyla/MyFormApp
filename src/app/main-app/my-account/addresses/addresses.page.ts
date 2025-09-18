import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Address {
  fullName: string;
  phone: string;
  line1: string;
  line2?: string;
  city: string;
  province: string;
  postal: string;
  isDefault: boolean;
}

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.page.html',
  styleUrls: ['./addresses.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule],
})
export class AddressesPage {
  form: FormGroup;
  addresses: Address[] = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      fullName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]],
      line1: ['', Validators.required],
      line2: [''],
      city: ['', Validators.required],
      province: ['', Validators.required],
      postal: ['', [Validators.required, Validators.pattern(/^[0-9]{3,10}$/)]],
      isDefault: [false],
    });
  }

  addAddress() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.value as Address;

    // If the new address is default, unset other defaults
    if (value.isDefault) {
      this.addresses.forEach(a => (a.isDefault = false));
    }

    this.addresses = [...this.addresses, value];
    this.form.reset({ isDefault: false });
  }

  makeDefault(i: number) {
    this.addresses = this.addresses.map((a, idx) => ({
      ...a,
      isDefault: idx === i,
    }));
  }
}
