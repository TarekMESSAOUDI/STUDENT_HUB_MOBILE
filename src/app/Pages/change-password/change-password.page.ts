/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { changePassword } from 'src/app/Models/ChangePassword';
import { TokenStorageService } from 'src/app/Services/TokenStorage/token-storage.service';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

  constructor(private userService: UserService, private tokenstorage: TokenStorageService) { }

  id: any = this.tokenstorage.getId();
  user: any = {};
  msg = '';
  showmsg = true;
  hideop = true;
  hidenp = true;
  hidecnp = true;

  ngOnInit(): void {
  }

  changeMDP() {
    const changepassword = new changePassword(this.user.aMdp, this.user.nMdp, this.user.cNMdp);
    this.userService.changeMDP(changepassword, this.id).subscribe(
      data => {
        this.msg = 'Password Updated Succefully !';
        this.showmsg = false;
        return data;
      });
  }

}
