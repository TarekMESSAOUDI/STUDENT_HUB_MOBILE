/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faThumbsUp, faThumbsDown, faTrash, faComment, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import * as Aos from 'aos';
import { BlogService } from 'src/app/Services/Blog/blog.service';
import { EventService } from 'src/app/Services/Event/event.service';
import { faFacebookF, faInstagram, faInstagramSquare, faMailchimp, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMailBulk, faPaperPlane, faPhone, faPhoneAlt, faPhoneSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  ListBlog: any;
  ListEvent: any;
  nEvent: any;
  nBlogs: any;
  hideLogin = false;
  hideLogout = true;
  profileImage: any;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faTrash = faTrash;
  faComment = faComment;
  faAngleUp = faAngleUp;
  faYoutube = faYoutube;
  faFacebook = faFacebookF;
  faInstagram = faInstagram;
  faSend = faPaperPlane;
  faPhone = faPhoneAlt;
  faEmail = faEnvelope;
  faLinkedIn = faLinkedin;

  constructor(private router: Router, private blogservice: BlogService, private eventservice: EventService) { }

  ngOnInit(): void {
    Aos.init();
    this.getAllBlogs();
    this.getAllEvents();
    this.showInOut();
    this.profileImage = localStorage.getItem('profileImage');
  }

  getAllBlogs() {
    this.blogservice.getAllBlog().subscribe(
      data => {
        this.ListBlog = data;
        this.nBlogs = this.ListBlog.length;
        return this.ListBlog;
      }
    );
  }

  setBlogId(id: any) {
    sessionStorage.setItem('IdBlog', id);
  }

  likeBlog(id: any) {
    this.blogservice.likeBlog(id).subscribe(
      data => {
        const hidelike = true;
        const hidedislike = false;
        return data;
      }
    );
  }

  dislikeBlog(id: any) {
    this.blogservice.disLikeBlog(id).subscribe(
      data => {
        const hidelike = false;
        const hidedislike = true;
        return data;
      }
    );
  }

  getAllEvents() {
    this.eventservice.getAllEvent().subscribe(
      data => {
        this.ListEvent = data;
        this.nEvent = this.ListEvent.length;
        return this.ListEvent;
      }
    );
  }

  showInOut() {
    if (localStorage.length > 2) {
      this.hideLogin = true;
      this.hideLogout = false;
    }
  }

  logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigateByUrl('/home/login');
  }

}
