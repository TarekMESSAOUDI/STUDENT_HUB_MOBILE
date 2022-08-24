import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardNoAdminServiceService {

  constructor(private router: Router) { }

  canActivate() {
    if (localStorage.getItem('Roles').includes('ADMINISTRATEUR')) {
      this.router.navigate(['/home']);
      return false;
    } else {
      return true;
    }
  }
}
