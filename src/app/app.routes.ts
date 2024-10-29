import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component'; // Ajusta según tu estructura

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  // Agrega otras rutas necesarias aquí
];
