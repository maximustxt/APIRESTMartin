import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from '../interfaces/User';
@Injectable({
  providedIn: 'root',
})
export class DatosService {
  constructor(private http: HttpClient) {}

  getPostUser() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
