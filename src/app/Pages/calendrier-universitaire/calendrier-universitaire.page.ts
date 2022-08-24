/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable radix */
/* eslint-disable @typescript-eslint/ban-types */
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { first } from 'rxjs/operators';
import { PeriodeService } from 'src/app/Services/Periode/periode.service';
import { AlertService } from 'src/app/Services/User/alert.service';

@Component({
  selector: 'app-calendrier-universitaire',
  templateUrl: './calendrier-universitaire.page.html',
  styleUrls: ['./calendrier-universitaire.page.scss'],
})
export class CalendrierUniversitairePage implements OnInit {
  form: FormGroup;
  submitted = false;
  id: any;
  msg = '';
  hidemsg = true;
  closeResult: string;
  listPeriode: any;
  description: String;
  date = new Date().getUTCFullYear();
  nextYears = parseInt((this.date).toString()) + 1;
  faTrash = faTrash;
  universit = false;

  constructor(private formBuilder: FormBuilder, private periodeservice: PeriodeService,
    private alertService: AlertService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getPeriodeByUniversiteId();
    this.Universite();

    this.form = this.formBuilder.group({
      start: ['', Validators.required],
      end: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.listPeriode, event.previousIndex, event.currentIndex);
  }

  active: boolean;
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    this.alertService.clear();
    if (this.form.invalid) {
      return;
    }


    this.periodeservice.addPeriode(localStorage.getItem('Id'), this.form.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', { keepAfterRouteChange: true });
          this.hidemsg = false;
          this.msg = 'Periode Added Succeffuly !';
          return data;
        },
        error => {
          this.alertService.error(error);
        }
      );
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openalert(contentalert: any) {
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

  getPeriodeByUniversiteId() {
    if (localStorage.getItem('Roles').includes('ETUDIANT')
      || localStorage.getItem('Roles').includes('CLUB') || localStorage.getItem('Roles').includes('ENSEIGNANT')) {
      this.id = localStorage.getItem('Universite').slice(8, 32);
    } else if (localStorage.getItem('Roles').includes('UNIVERSITE')) {
      this.id = localStorage.getItem('Id');
    } else if (localStorage.getItem('Roles').includes('ADMINISTRATEUR')) {
      this.id = sessionStorage.getItem('IdUniversite');
    }
    this.periodeservice.getByUniversiteId(this.id).subscribe(
      data => {
        this.listPeriode = data;
        return this.listPeriode;
      }
    );
  }

  deletePeriode() {
    this.periodeservice.deletePeriode(sessionStorage.getItem('IdPeriode')).subscribe(
      data => data
    );
  }

  setIdPeriode(id: any) {
    sessionStorage.setItem('IdPeriode', id);
  }

  SearchPeriode() {
    if (this.description != '') {
      this.listPeriode = this.listPeriode.filter(res => res.description.toLowerCase().match(this.description.toLowerCase()));
    }
    else if (this.description == '') {
      this.getPeriodeByUniversiteId();
    }
  }

  Universite() {
    if (localStorage.getItem('Roles').includes('UNIVERSITE')) {
      this.universit = true;
    }
  }
}
