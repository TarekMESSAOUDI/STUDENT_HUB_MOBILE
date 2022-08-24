/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faDownload, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { first } from 'rxjs/operators';
import { DocumentService } from 'src/app/Services/Documet/document.service';
import { AlertService } from 'src/app/Services/User/alert.service';

@Component({
  selector: 'app-documents-scolaire',
  templateUrl: './documents-scolaire.page.html',
  styleUrls: ['./documents-scolaire.page.scss'],
})
export class DocumentsScolairePage implements OnInit {

  courses: any;
  titre: string;
  faDownload = faDownload;
  faTrash = faTrash;
  showdel = false;
  closeResult: string;
  hidecours = true;
  hidetd = true;
  hidetp = true;
  hideatelier = true;
  hideexamen = true;
  hideserie = true;
  hideautre = true;
  form: FormGroup;
  hidemsg = true;
  msg = '';
  submitted = false;
  selectedFile: File = null;

  constructor(private documentservice: DocumentService, private modalService: NgbModal,
    private formBuilder: FormBuilder, private alertService: AlertService) { }

  ngOnInit(): void {
    this.showDel();
    this.form = this.formBuilder.group({
      categorie: ['', Validators.required],
    });
  }

  active: boolean;
  get c() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    this.alertService.clear();
    if (this.form.invalid) {
      return;
    }
    const file = new FormData();
    file.append('nom', this.selectedFile, this.selectedFile.name);
    this.documentservice.addDocument(localStorage.getItem('Id'), sessionStorage.getItem('IdMatiere'), this.form.value.categorie, file)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', { keepAfterRouteChange: true });
          this.hidemsg = false;
          this.msg = 'Doc Added Succeffuly !';
        },
        error => {
          this.alertService.error(error);
        }
      );
  }

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
  }

  getCoursByCategorieAndMatiereId() {
    this.documentservice.getByCategorieAndMatiereId('COURS', sessionStorage.getItem('IdMatiere')).subscribe(
      data => {
        this.courses = data;
        this.hidecours = false;
        this.hidetd = true;
        this.hidetp = true;
        this.hideatelier = true;
        this.hideexamen = true;
        this.hideserie = true;
        this.hideautre = true;
        return this.courses;
      }
    );
  }

  getTdByCategorieAndMatiereId() {
    this.documentservice.getByCategorieAndMatiereId('TD', sessionStorage.getItem('IdMatiere')).subscribe(
      data => {
        this.courses = data;
        this.hidecours = true;
        this.hidetd = false;
        this.hidetp = true;
        this.hideatelier = true;
        this.hideexamen = true;
        this.hideserie = true;
        this.hideautre = true;
        return this.courses;
      }
    );
  }

  getTpByCategorieAndMatiereId() {
    this.documentservice.getByCategorieAndMatiereId('TP', sessionStorage.getItem('IdMatiere')).subscribe(
      data => {
        this.courses = data;
        this.hidecours = true;
        this.hidetd = true;
        this.hidetp = false;
        this.hideatelier = true;
        this.hideexamen = true;
        this.hideserie = true;
        this.hideautre = true;
        return this.courses;
      }
    );
  }

  getAtelierByCategorieAndMatiereId() {
    this.documentservice.getByCategorieAndMatiereId('ATELIER', sessionStorage.getItem('IdMatiere')).subscribe(
      data => {
        this.courses = data;
        this.hidecours = true;
        this.hidetd = true;
        this.hidetp = true;
        this.hideatelier = false;
        this.hideexamen = true;
        this.hideserie = true;
        this.hideautre = true;
        return this.courses;
      }
    );
  }

  getExamenByCategorieAndMatiereId() {
    this.documentservice.getByCategorieAndMatiereId('EXAMEN', sessionStorage.getItem('IdMatiere')).subscribe(
      data => {
        this.courses = data;
        this.hidecours = true;
        this.hidetd = true;
        this.hidetp = true;
        this.hideatelier = true;
        this.hideexamen = false;
        this.hideserie = true;
        this.hideautre = true;
        return this.courses;
      }
    );
  }

  getSerieByCategorieAndMatiereId() {
    this.documentservice.getByCategorieAndMatiereId('SERIE', sessionStorage.getItem('IdMatiere')).subscribe(
      data => {
        this.courses = data;
        this.hidecours = true;
        this.hidetd = true;
        this.hidetp = true;
        this.hideatelier = true;
        this.hideexamen = true;
        this.hideserie = false;
        this.hideautre = true;
        return this.courses;
      }
    );
  }

  getAutreByCategorieAndMatiereId() {
    this.documentservice.getByCategorieAndMatiereId('AUTRE', sessionStorage.getItem('IdMatiere')).subscribe(
      data => {
        this.courses = data;
        this.hidecours = true;
        this.hidetd = true;
        this.hidetp = true;
        this.hideatelier = true;
        this.hideexamen = true;
        this.hideserie = true;
        this.hideautre = false;
        return this.courses;
      }
    );
  }

  SearchDocByNom() {
    if (this.titre != '') {
      this.courses = this.courses.filter(res => res.nom.toLowerCase().match(this.titre.toLowerCase()));
    }
    else if (this.titre == '') {
      this.getCoursByCategorieAndMatiereId();
    }
  }

  showDel() {
    if (localStorage.getItem('Roles').includes('UNIVERSITE')) {
      this.showdel = true;
    }
  }

  openalert(contentalert) {
    this.modalService.open(contentalert, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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

  setDocId(id: any) {
    sessionStorage.setItem('IdDoc', id);
  }

  deleteDoc() {
    this.documentservice.delete(sessionStorage.getItem('IdDoc')).subscribe(
      data => data
    );
  }
}

