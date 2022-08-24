/* eslint-disable eqeqeq */
import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  menuMode = 'static';
  title = 'STUDENTHUBFRONT';
  showHead: boolean;
  showSidebar: boolean;
  id: any = null;
  style: any;

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
    AOS.init();
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(private router: Router) {
    // on route change to '/login', set the variable showHead to false
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        // eslint-disable-next-line eqeqeq
        if ((event.url == '/home/Register') || (event.url == '/home/login')) {
          this.showHead = false;
        } else {
          // console.log("NU")
          this.showHead = true;
        }
      }
    });
    // on route change to '/login', set the variable showHead to false
    router.events.forEach((event) => {
      this.id = localStorage.getItem('Id');
      if (event instanceof NavigationStart) {
        // eslint-disable-next-line eqeqeq
        if ((event.url == '/home/profile') ||
          (event.url == '/home/settings') ||
          (event.url == '/home/universities') ||
          (event.url == '/home/table') ||
          (event.url == '/home/table-club') ||
          (event.url == '/home/table-enseignant') ||
          (event.url == '/home/table-etudiant') ||
          (event.url == '/home/filiere') ||
          (event.url == '/home/specialite') ||
          (event.url == '/home/university') ||
          (event.url == '/home/niveau') ||
          (event.url == '/home/class') ||
          (event.url == '/home/salle') ||
          (event.url == '/home/gestion-blog') ||
          (event.url == '/home/matiere') ||
          (event.url == '/home/event') ||
          (event.url == '/home/calendar') ||
          (event.url == '/home/changeMdp') ||
          (event.url == '/home/changePImage') ||
          (event.url == '/home/changeCImage') ||
          (event.url == '/home/changeIImage') ||
          (event.url == '/home/documents-scolaire') ||
          (event.url == '/home/demande-document') ||
          (event.url == '/home/calendrier-universitaire') ||
          (event.url == '/home/gestion-document')) {
          this.showSidebar = true;
        } else {
          // console.log("NU")
          this.showSidebar = false;
        }
      }
    });
  }
  showPopUp() {
    this.style = 'block';
  }
}
