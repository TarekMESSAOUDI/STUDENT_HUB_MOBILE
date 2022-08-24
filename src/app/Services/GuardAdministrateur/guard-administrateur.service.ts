import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardAdministrateurService {

  constructor(private router: Router) { }

  canActivate() {
    if (localStorage.getItem('Roles').includes('CLUB') ||
      localStorage.getItem('Roles').includes('ETUDIANT') ||
      localStorage.getItem('Roles').includes('ENSEIGNANT') ||
      localStorage.getItem('Roles').includes('UNIVERSITE') ||
      localStorage.length < 2) {
      this.router.navigate(['/home']);
      return false;
    } else {
      return true;
    }
  }
}
