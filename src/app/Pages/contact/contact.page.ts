/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faFacebookSquare, faGithub, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Contact } from 'src/app/Models/Contact';
import { ContactService } from 'src/app/Services/Contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  faFacebook = faFacebookSquare;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faEnvolope = faEnvelope;
  faPhone = faPhone;
  faLinkedin = faLinkedin;
  faGithub = faGithub;

  contact: Contact;
  message = "";
  showmessage: Boolean = true;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contact = new Contact();
  }

  sendMail(contact: NgForm) {
    this.contactService.getInTouch(contact.value).subscribe(
      (data) => {
        this.showmessage = false;
        this.message = "Email Sended Succefully";
        return data;
      },
      (error) => {
        this.showmessage = false;
        this.message = "Failds !";
        return error;
      }
    );
  }
}

