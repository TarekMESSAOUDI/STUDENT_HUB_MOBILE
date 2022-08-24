import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardVisitorService {

  constructor(private router: Router) { }

  canActivate() {
    if (localStorage.length < 2) {
      this.router.navigate(['/home/login']);
      return false;
    } else {
      return true;
    }
  }
}
