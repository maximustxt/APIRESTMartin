import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  FormUser!: FormGroup;

  constructor(private FB: FormBuilder, private router: Router) {
    this.FormUser = this.FB.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  OnSubmit() {
    if (!this.FormUser.value.email || !this.FormUser.value.password) {
      alert('Campos obligatorios');
    } else if (
      this.FormUser.value.email !== 'PruebaGmail@gmail.com' &&
      this.FormUser.value.password !== '123456'
    ) {
      alert(
        'Credenciales incorrectas! LAS CREDENCIALES SON : Email: PruebaGmail@gmail.com  Password: 123456 '
      );
    } else {
      localStorage.setItem('Usuario', JSON.stringify(this.FormUser.value));
      this.router.navigate(['/Home']);
    }
  }
}
