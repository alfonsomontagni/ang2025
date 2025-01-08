import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
    selector: 'app-login',
    imports: [
        CommonModule,
        FormsModule
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      // logica di login, chiamate a servizi, ecc.
    }
  }
}
