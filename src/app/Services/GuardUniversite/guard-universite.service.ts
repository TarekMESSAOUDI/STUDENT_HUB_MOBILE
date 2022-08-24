import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardUniversiteService {

  constructor(private router: Router) { }

  canActivate() {
    if (localStorage.getItem('Roles').includes('UNIVERSITE')) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
