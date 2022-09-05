/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable radix */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faBloggerB, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faBrain, faCalendar, faCoffee, faCog, faEnvelope, faFlag, faInfoCircle, faMapMarker, faNewspaper, faObjectGroup, faUniversity, faUser }
  from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  date = new Date().getUTCFullYear();
  nextYears = parseInt((this.date).toString()) + 1;
  id: any = null;
  user: User = null;
  nomInstitut = 'Admin';
  faFlag = faFlag;
  faMapMarker = faMapMarker;
  faUniversity = faUniversity;
  faCalendar = faCalendar;
  faInfoCircle = faInfoCircle;
  faBrain = faBrain;
  faObjectGroup = faObjectGroup;
  faEnvelope = faEnvelope;
  faCoffee = faCoffee;
  faUser = faUser;
  faFacebook = faFacebook;
  faDoc = faNewspaper;
  faBlog = faBloggerB;
  faInterested = faFlag;
  faCog = faCog;
  hideuniversities = true;
  hidefiliere = true;
  showcalendar = true;
  hideinstitutimage = true;
  listUniversite: any;
  universite: any;
  hidedocument = false;
  showdocument = false;
  showuniversitycalendar = true;


  constructor(private router: Router, private activateRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.findUserById();
    this.findUserById();
    this.AdminOrUniversite();
    this.showCalendar();
    this.hideInstitutImage();
    this.getAllUniversities();
    this.hideDocument();
    this.showDocument();
    this.showUniversityCalendar();
  }

  findUserById(...args: []) {
    this.id = localStorage.getItem('Id');
    this.userService.findById(this.id).subscribe(data => {
      this.user = data;
      return this.user;
    });
  }

  AdminOrUniversite() {
    if (localStorage.getItem('Roles').includes('ADMINISTRATEUR')) {
      this.hideuniversities = false;
    }
    if (localStorage.getItem('Roles').includes('UNIVERSITE')) {
      this.hidefiliere = false;
    }
  }

  showCalendar() {
    if (localStorage.getItem('Roles').includes('ADMINISTRATEUR')) {
      this.showcalendar = false;
    }
  }

  hideInstitutImage() {
    if (localStorage.getItem('Roles').includes('ADMINISTRATEUR') || localStorage.getItem('Roles').includes('UNIVERSITE')) {
      this.hideinstitutimage = false;
    }
  }

  hideDocument() {
    if (localStorage.getItem('Roles').includes('ETUDIANT') ||
      localStorage.getItem('Roles').includes('ENSEIGNANT') ||
      localStorage.getItem('Roles').includes('CLUB')) {
      this.hidedocument = true;
    }
  }

  showDocument() {
    if (localStorage.getItem('Roles').includes('UNIVERSITE')) {
      this.showdocument = true;
    }
  }

  getAllUniversities() {
    this.userService.getAllUniversities().subscribe(
      data => {
        this.listUniversite = data;
        return this.listUniversite;
      }
    );
  }

  getUniversiteById() {
    this.userService.findById(sessionStorage.getItem('IdUniversite')).subscribe(
      data => {
        this.universite = data;
        return this.universite;
      }
    );
  }

  setIdUniversite(id: any) {
    sessionStorage.setItem('IdUniversite', id);
  }

  showUniversityCalendar() {
    if (localStorage.getItem('Roles').includes('ADMINISTRATEUR')) {
      this.showuniversitycalendar = false;
    }
  }
}

