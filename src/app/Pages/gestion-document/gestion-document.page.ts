/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BlogService } from 'src/app/Services/Blog/blog.service';
import { AlertService } from 'src/app/Services/User/alert.service';

@Component({
  selector: 'app-gestion-document',
  templateUrl: './gestion-document.page.html',
  styleUrls: ['./gestion-document.page.scss'],
})
export class GestionDocumentPage implements OnInit {

  id: any;
  ListBlog: any;
  closeResult: string;
  hide = true;
  blog: any = {};
  cin: any;
  msg = '';
  hidemsg = true;
  form: FormGroup;
  submitted = false;
  titre: any;
  Status: any;
  nBlog: any;
  faDel = faTrash;
  faEdit = faEdit;


  constructor(
    private modalService: NgbModal,
    private blogservice: BlogService,
    private router: Router,
    private formBuilder: FormBuilder,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.getBlogByUserId();
    this.CountBlogByUserId();

    this.form = this.formBuilder.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
    });

  }

  get b() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.alertService.clear();
    if (this.form.invalid) {
      return;
    }
    this.id = localStorage.getItem('Id');
    this.blogservice.ajouterBlog(this.form.value, this.id)
      .subscribe(
        data => {
          this.hidemsg = false;
          this.msg = 'Blog Added Successfully !';
          this.alertService.success('Registration successful', { keepAfterRouteChange: true });
          return data;
        },
        error => {
          this.alertService.error(error);
        }
      );
  }

  onEdit() {
    this.submitted = true;
    this.alertService.clear();
    if (this.form.invalid) {
      return;
    }
    this.blogservice.updateBlog(sessionStorage.getItem('IdBlog'), this.form.value,)
      .subscribe(
        data => {
          this.hidemsg = false;
          this.msg = 'Blog Updated Successfully !';
          this.alertService.success('Registration successful', { keepAfterRouteChange: true });
          return data;
        },
        error => {
          this.alertService.error(error);
        }
      );
  }

  getBlogByUserId() {
    this.id = localStorage.getItem('Id');
    this.blogservice.getBlogByUserId(this.id).subscribe(
      data => {
        this.ListBlog = data;

        return this.ListBlog;
      }
    );
    if (this.ListBlog.masquer == false) {
      this.Status = 'Shown';
      console.log(this.Status);
    }
    console.log(this.Status);
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  opene(contente) {
    this.modalService.open(contente, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openalert(contentalert) {
    this.modalService.open(contentalert, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  SearchBlogByTitre() {
    if (this.titre != '') {
      this.ListBlog = this.ListBlog.filter(res => res.titre.toLowerCase().match(this.titre.toLowerCase()));
    }
    else if (this.titre == '') {
      this.getBlogByUserId();
    }
  }

  CountBlogByUserId() {
    this.blogservice.countBlogByIdUser(localStorage.getItem('Id')).subscribe(
      data => {
        this.nBlog = data;
        return this.nBlog;
      }
    );
  }

  deleteBlog() {
    this.blogservice.deleteBlog(sessionStorage.getItem('IdBlog')).subscribe(
      data => data
    );
  }

  masquerBlog(id: any) {
    this.blogservice.masquerBlog(id).subscribe(
      data => data
    );
  }

  updateBlog(id: any) {
    this.blogservice.updateBlog(id, this.blog).subscribe(
      data => {
        this.blog = data;
        return this.blog;
      }
    );
  }

  setIdThisBlog(id: any) {
    sessionStorage.setItem('IdBlog', id);
  }

}

