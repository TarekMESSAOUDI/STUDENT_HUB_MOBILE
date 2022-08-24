import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardEtudiantService {

  constructor(private router: Router) { }

  canActivate() {
    if (localStorage.getItem('Roles').includes('ETUDIANT')) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
