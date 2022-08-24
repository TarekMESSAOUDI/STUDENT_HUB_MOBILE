/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { first } from 'rxjs/operators';
import { DemandeService } from 'src/app/Services/Demande/demande.service';
import { DocumentService } from 'src/app/Services/Documet/document.service';
import { AlertService } from 'src/app/Services/User/alert.service';
import { UserService } from 'src/app/Services/User/user.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-demande-document',
  templateUrl: './demande-document.page.html',
  styleUrls: ['./demande-document.page.scss'],
})
export class DemandeDocumentPage implements OnInit {

  @ViewChild('sCard', { static: false }) el!: ElementRef;

  ListDemande: any;
  titre: any;
  closeResult: string;
  form: FormGroup;
  forme: FormGroup;
  submitted = false;
  id: any;
  hidemsg = true;
  msg = '';
  newreq = true;
  colore = "yellow";
  title = "Student Card";
  u: any;
  selectedFile: File = null;
  tx = "0xa46e815445e32e6b23c058715985fc1125e35db362482acda00ed16a86378ed5;";

  constructor(private documentservice: DocumentService, private userservice: UserService,
    private demandeservice: DemandeService, private modalService: NgbModal,
    private formBuilder: FormBuilder, private alertService: AlertService) { }

  ngOnInit(): void {
    this.getUserById();
    if (localStorage.getItem("Roles").includes("UNIVERSITE") || localStorage.getItem("Roles").includes("ADMINISTRATEUR")) {
      this.getByUniversiteId();
    } else {
      this.getByUserId();
    }
    this.newReq();
    this.form = this.formBuilder.group({
      type: ['', Validators.required],
      raison: ['', Validators.required],
    });
    this.forme = this.formBuilder.group({
      doc: ['', Validators.required],
    });
  }

  getUserById() {
    this.userservice.findById(localStorage.getItem("Id")).subscribe(
      data => {
        this.u = data;
        return this.u;
      }
    );
  }

  newReq() {
    if (localStorage.getItem("Roles").includes("UNIVERSITE")) {
      this.newreq = false;
    }
  }

  active: boolean;
  get c() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    this.alertService.clear();
    if (this.form.invalid) {
      return;
    }
    this.id = localStorage.getItem("Id");
    this.demandeservice.addDemande(this.id, this.form.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', { keepAfterRouteChange: true });
          this.hidemsg = false;
          this.msg = "Request Added Succeffuly !";
        },
        error => {
          this.alertService.error(error);
        }
      );
  }

  get d() { return this.forme.controls; }
  onExport() {
    this.submitted = true;
    this.alertService.clear();
    console.log("enjoy");
    const file = new FormData();
    file.append('nom', this.selectedFile, this.selectedFile.name);
    this.documentservice.addDocument(localStorage.getItem("Id"), sessionStorage.getItem("idd"), "aa", file)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', { keepAfterRouteChange: true });
          this.hidemsg = false;
          this.msg = "Doc Added Succeffuly !";
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

  getByUserId() {
    this.demandeservice.getDemandeByIdUser(localStorage.getItem("Id")).subscribe(
      data => {
        this.ListDemande = data;
        return this.ListDemande;
      }
    );
  }

  getByUniversiteId() {
    this.demandeservice.getDemandeByUniversite(localStorage.getItem("Id")).subscribe(
      data => {
        this.ListDemande = data;
        console.log(this.ListDemande);
        return this.ListDemande;
      }
    );
  }

  SearchDemandeByType() {
    if (this.titre != "") {
      this.ListDemande = this.ListDemande.filter(res => res.etat.toLowerCase().match(this.titre.toLowerCase()));
    }
    else if (this.titre == "") {
      this.getByUserId();
    }
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  opene(contente, id) {
    sessionStorage.setItem("idd", id);
    this.modalService.open(contente, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openalerte(alerte: any) {
    this.modalService.open(alerte, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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

  ready(id: any, tx: any) {
    this.demandeservice.ready(id, tx).subscribe(
      data => data
    );
  }

  makePDF(cin, type) {
    const pdf = new jsPDF('p', 'pt', 'a3');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save(cin + "_" + type + ".pdf");
      }
    });
  }

  setIdDemande(id) {
    sessionStorage.setItem("IdDemande", id);
  }

  deleteDemande() {
    this.demandeservice.deleteDemande(sessionStorage.getItem("IdDemande")).subscribe(
      data => data
    );
  }
}
