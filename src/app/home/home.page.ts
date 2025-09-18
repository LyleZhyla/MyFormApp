
import { Component } from '@angular/core'; import { CommonModule } from '@angular/common'; 
import { FormsModule, NgForm } from '@angular/forms'; 
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    IonicModule,
    RouterModule // Required for routerLink directive
  ],
  selector: 'app-home ',
  templateUrl: 'home.page.html', 
  styleUrls: ['home.page.scss'],

})
export class HomePage {
  username: string = '';
  password: string = '';

constructor(private router: Router) {}

onLogin(form: NgForm) {
    if (form.valid) {
      console.log('Login successful', form.value);
      alert('Login Successful');

    } else {
      console.log('Login failed.');
      alert('Please fill out all fields');
    }
  }


  goToRegistration(){
    this.router.navigate(['/registration']);
  }
}
