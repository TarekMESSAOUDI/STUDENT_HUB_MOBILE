import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Authentification } from 'src/app/Models/Authentification';
import { TokenStorageService } from 'src/app/Services/TokenStorage/token-storage.service';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {

  hide = true;
  user: any = {};
  msg = '';
  hideMsg = true;
  faEye = faEye;

  constructor(private userservice: UserService, private tokenstorage: TokenStorageService, private router: Router) { }

  ngOnInit() {

  }

  signIn() {
    this.userservice.signIn(new Authentification(this.user.cin, this.user.mdp)).subscribe(
      data => {
        this.user = data;
        this.tokenstorage.saveId(this.user.id);
        this.tokenstorage.saveRoles(this.user.roles);
        this.tokenstorage.saveToken(this.user.accessToken);
        this.tokenstorage.saveProfileImage(this.user.profileImage);
        this.tokenstorage.saveInstitut(this.user.institut);
        this.tokenstorage.saveClass(this.user.class);
        this.tokenstorage.saveInstitut(this.user.institut);
        this.router.navigateByUrl('');
      },
      error => {
        this.hideMsg = false;
        this.msg = 'CIN ou Mot de Pass Incorrect ';
      }
    );
  }

}
