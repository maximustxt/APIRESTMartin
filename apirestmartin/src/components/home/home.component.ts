import { Component } from '@angular/core';
import { Router } from '@angular/router';
import User from 'src/interfaces/User';
import { DatosService } from 'src/services/datos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private ServiceData: DatosService, private router: Router) {}

  Users: User[] = [];

  ngOnInit(): void {
    this.ServiceData.getPostUser().subscribe({ next: (v) => (this.Users = v) });
  }

  FuncionLogout() {
    localStorage.removeItem('Usuario');
    this.router.navigate(['']);
  }
}
