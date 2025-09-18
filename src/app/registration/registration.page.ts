import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
})
export class RegistrationPage implements OnInit {
  // User details
  lastName: string = '';
  firstName: string = '';
  middleName: string = '';
  email: string = '';
  contactNumber: string = '';
  birthdate: string | null = null; // ✅ bound to ion-datetime

  // Other form fields
  acceptedTerms: boolean = false;
  selectedPlan: string = 'free';
  emailNotifications: boolean = true;
  country: string = 'ph';

  constructor(private router: Router) {}

  ngOnInit() {}

  // ✅ Format birthdate for display/submit
  formatDate(isoString: string | null): string {
    if (!isoString) return '';
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  onRegister(form: NgForm) {
    if (form.valid) {
      const formattedBirthdate = this.formatDate(this.birthdate);

      console.log('Registration successful!', {
        ...form.value,
        birthdate: formattedBirthdate,
      });


      this.router.navigate(['/home']);
    } else {
      console.log('Registration failed.');
      alert('Please fill out all required fields.');
    }
  }
}
