/* eslint-disable space-before-function-paren */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/Services/TokenStorage/token-storage.service';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-change-profile-image',
  templateUrl: './change-profile-image.page.html',
  styleUrls: ['./change-profile-image.page.scss'],
})
export class ChangeProfileImagePage implements OnInit {

  constructor(private userService: UserService, private tokenstorage: TokenStorageService) { }

  selectedFile: File = null;
  id: any = this.tokenstorage.getId();
  user: any = {};
  msg = '';
  showmsg = true;

  ngOnInit(): void {
    this.findById();
    $('#wizard-picture').change(function () {
      readURL(this);
    });
    function readURL(input) {
      if (input.files && input.files[0]) {
        const reader = new FileReader();

        // reader.onload = function (e) {
        // $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
        //};
        reader.readAsDataURL(input.files[0]);
      }
    }
  }

  findById() {
    this.userService.findById(this.id).subscribe(
      data => {
        this.user = data;
        return this.user;
      }
    );
  }

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
  }

  uploadProfileImage() {
    const file = new FormData();
    file.append('profileImage', this.selectedFile, this.selectedFile.name);
    this.userService.changeProfileImage(file, this.id).subscribe(
      data => {
        this.msg = 'Image Uploaded Succefully !';
        this.showmsg = false;
        return data;
      }
    );
  }

}
