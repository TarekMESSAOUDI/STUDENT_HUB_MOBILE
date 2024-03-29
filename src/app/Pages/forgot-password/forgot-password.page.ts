import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from 'src/app/Services/Contact/contact.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  email: any;
  user: any;
  msg = '';
  siteKey = '6LfsTZMfAAAAAIY_FlP17PVhGHxBcMohV5Xx8n0p';

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }


  sendEmail(email: NgForm) {
    this.contactService.sendEmail(email.value).subscribe(
      (data) => {
        this.msg = 'An email is sent to your address';
        localStorage.setItem('Roles', 'VISITEUR');
        return data;
      },
      (error) => {
        this.msg = 'Faild !';
        return error;
      }
    );
  }
}
