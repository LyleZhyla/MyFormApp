import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule // Required for routerLink or navigate
  ],
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  // Login method with dummy credentials
  onLogin(form: NgForm) {
    const dummyUser = 'user';
    const dummyPass = 'password';

    if (form.valid) {
      if (this.username === dummyUser && this.password === dummyPass) {
        this.router.navigateByUrl('/main-app/home');
        alert('Login successful');
      } else {
        alert('Login failed. Use user / password');
      }
    } else {
      alert('Please fill out all fields');
    }
  }

  // Navigate to registration page
  goToRegistration() {
    this.router.navigate(['/registration']);
  }
}
