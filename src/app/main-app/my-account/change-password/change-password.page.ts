// src/app/my-account/change-password/change-password.page.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export class ChangePasswordPage {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      currentPassword: ['', Validators.required],
      newPasswordGroup: this.fb.group({
        newPassword: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      }),
    });
  }

  // Getter to simplify template access
  get newPasswordGroup(): FormGroup {
    return this.form.get('newPasswordGroup') as FormGroup;
  }

  onSubmit() {
    if (this.form.invalid) {
      alert('Please fill out all required fields.');
      return;
    }

    const newPass = this.newPasswordGroup.get('newPassword')?.value;
    const confirmPass = this.newPasswordGroup.get('confirmPassword')?.value;

    if (newPass !== confirmPass) {
      alert('New password and confirmation do not match.');
      return;
    }

    console.log('Password change submitted:', this.form.value);
    // TODO: Handle password change logic here (e.g., call backend API)
  }
}
