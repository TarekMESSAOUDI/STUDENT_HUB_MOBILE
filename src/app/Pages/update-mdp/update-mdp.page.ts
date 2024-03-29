import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdatePassword } from 'src/app/Models/UpdatePassword';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-update-mdp',
  templateUrl: './update-mdp.page.html',
  styleUrls: ['./update-mdp.page.scss'],
})
export class UpdateMdpPage implements OnInit {

  hide = true;
  user: any = {};
  cin: any;
  msg = '';
  siteKey = '6LfsTZMfAAAAAIY_FlP17PVhGHxBcMohV5Xx8n0p';

  constructor(private userservice: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  updateMDP() {
    this.userservice.updateMDP(new UpdatePassword(this.user.cin, this.user.nMdp, this.user.cNMdp)).subscribe(
      data => {
        this.router.navigate(['/home/login']);
        console.log(data);
        return data;
      }
    );
  }
}

