/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CalendarOptions, formatDate, FullCalendarComponent } from '@fullcalendar/angular';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { first } from 'rxjs/operators';
import { ClassService } from 'src/app/Services/Class/class.service';
import { EventService } from 'src/app/Services/Event/event.service';
import { MatiereService } from 'src/app/Services/Matiere/matiere.service';
import { NoteService } from 'src/app/Services/Note/note.service';
import { SalleService } from 'src/app/Services/Salle/salle.service';
import { SeanceService } from 'src/app/Services/Seance/seance.service';
import { TokenStorageService } from 'src/app/Services/TokenStorage/token-storage.service';
import { AlertService } from 'src/app/Services/User/alert.service';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  events: any[];
  calendarEvent: any;
  id: any;
  matieres: any;
  enseignants: any;
  salles: any;
  form: FormGroup;
  formNote: FormGroup;
  submitted = false;
  hidemsg = true;
  msg = '';
  closeResult: string;
  edit = false;
  showaddevent = false;
  notes: any;
  classes: any;
  listEvent: any;
  showlistevents = false;

  constructor(private eventservice: EventService, private classeservice: ClassService,
    private noteservice: NoteService, private modalService: NgbModal,
    private alertService: AlertService, private formBuilder: FormBuilder,
    private salleservice: SalleService, private userservice: UserService,
    private matiereservice: MatiereService, private seanceservice: SeanceService,
    private tokenstorage: TokenStorageService, private router: Router) { }


  ngOnInit(): void {
    this.getSeanceById();
    this.getMatByUniversiteId();
    this.getAllEnseignantByUniversiteId();
    this.getSalleByUniversiteId();
    this.showAddEvents();
    this.getNoteById();
    this.getClassByUniversiteId();
    this.getEventById();
    this.showListEvents();

    const str = formatDate('2018-09-01', {
      month: 'long',
      year: 'numeric',
      day: 'numeric',
      timeZoneName: 'short',
      timeZone: 'UTC',
      locale: 'tn'
    });

    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      start: ['', Validators.required],
      end: ['', Validators.required],
      matiere: ['', Validators.required],
      enseignant: ['', Validators.required],
      salle: ['', Validators.required],
      classs: ['', Validators.required]
    });

    this.formNote = this.formBuilder.group({
      title: ['', Validators.required],
      start: ['', Validators.required],
      end: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  calendarOptions: CalendarOptions = {
    //plugins: [timeGridPlugin, listPlugin, interactionPlugin, momentTimezonePlugin],
    droppable: true,
    editable: true,
    eventResizableFromStart: true,
    nowIndicator: true,
    timeZone: 'local',
    navLinks: true,
    weekNumberCalculation: 'local',
    weekNumbers: true,
    weekText: 'W',
    weekTextLong: 'Week',
    weekNumberFormat: { week: 'narrow' },
    weekNumberClassNames: 'a',
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this),
    weekends: true,
    fixedWeekCount: true,
    showNonCurrentDates: true,
    themeSystem: 'bootstrap5',
    slotEventOverlap: true,
    slotLabelFormat: {
      hour: 'numeric',
      minute: '2-digit',
      omitZeroMinute: true,
      meridiem: 'short'
    },
    headerToolbar: {
      start: 'title',
      center: 'dayGridMonth,timeGridWeek,timeGridDay,listDay',
      end: 'today prev,next'
    },
    navLinkDayClick(date, jsEvent) {
      console.log('day', date.toISOString());
      console.log('coords', jsEvent, jsEvent);
    },
    navLinkWeekClick(weekStart, jsEvent) {
      console.log('week start', weekStart.toISOString());
      console.log('coords', jsEvent, jsEvent);
    },
    titleFormat: {
      month: 'long',
      year: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    },
    eventTimeFormat: {
      hour12: false,
      hour: '2-digit',
      minute: 'numeric',

    },
    buttonText: {
      today: 'today',
      month: 'month',
      week: 'week',
      day: 'day',
      list: 'list'
    },
    buttonIcons: {
      prev: 'chevron-left',
      next: 'chevron-right',
      prevYear: 'chevrons-left', // double chevron
      nextYear: 'chevrons-right' // double chevron
    },
    customButtons: {
      myCustomButton: {
        text: 'custom!',
        click() {
          alert('clicked the custom button!');
        }
      }
    },
    bootstrapFontAwesome: {
      close: 'fa-times',
      prev: 'fa-chevron-left',
      next: 'fa-chevron-right',
      prevYear: 'fa-angle-double-left',
      nextYear: 'fa-angle-double-right'
    },
    views: {
      dayGridMonth: {
        titleFormat: { year: 'numeric', month: '2-digit', day: '2-digit' },
        timeZone: 'Tunisia',
      },
    },
    endParam: '',
    eventTextColor: 'black',
    eventRemove() {
      this.deleteEvent();
    },
    eventSources: [
      {
        url: 'http://localhost:9091/Seance/getByIdUniversite/' + sessionStorage.getItem('IdCalendar'),
        color: 'Aqua',
        textColor: 'Black',
        backgroundColor: 'Aqua',
      },
      {
        url: 'http://localhost:9091/Seance/getByIdClass/' + sessionStorage.getItem('IdCalendar'),
        color: 'Aqua',
        textColor: 'Black',
        backgroundColor: 'Aqua',
      },
      {
        url: 'http://localhost:9091/Seance/getByIdEnseignant/' + sessionStorage.getItem('IdCalendar'),
        color: 'Aqua',
        textColor: 'Black',
        backgroundColor: 'Aqua',
      },
      {
        url: 'http://localhost:9091/Note/getNoteById/' + localStorage.getItem('Id'),
        color: 'Pink',
        textColor: 'Black',
        backgroundColor: 'Yellow',
      },
      {
        url: 'http://localhost:9091/Event/getAll',
        color: 'Green',
        textColor: 'Black',
        backgroundColor: 'Lime',
      },
    ],
    eventDidMount(info) {
      if (info.event.extendedProps.status === 'done') {

        // Change background color of row
        info.el.style.backgroundColor = 'lime';
      }
      if (info.event.extendedProps.status === 'Not Yet') {

        // Change background color of row
        info.el.style.backgroundColor = 'yellow';
      }
    }
  };


  someMethod() {
    const calendarApi = this.calendarComponent.getApi();
    calendarApi.next();
  }

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends;
  }

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr);
  }

  showListEvents() {
    if (localStorage.getItem('Roles').includes('CLUB')) {
      this.showlistevents = true;
    }
  }

  getSeanceById() {
    if (localStorage.getItem('Roles').includes('ADMINISTRATEUR')) {
      sessionStorage.setItem('IdCalendar', sessionStorage.getItem('IdUniversite'));
      this.id = sessionStorage.getItem('IdCalendar');
      this.seanceservice.getSeanceByUniversiteId(this.id).pipe().subscribe(
        data => {
          this.events = data;
          console.clear();
          return this.events;
        });
    } else if (localStorage.getItem('Roles').includes('UNIVERSITE')) {
      sessionStorage.setItem('IdCalendar', localStorage.getItem('Id'));
      this.id = sessionStorage.getItem('IdCalendar');
      this.seanceservice.getSeanceByUniversiteId(this.id).subscribe(
        data => {
          this.events = data;
          return this.events;
        });
    } else if (localStorage.getItem('Roles').includes('CLUB')) {
      sessionStorage.setItem('IdCalendar', localStorage.getItem('Universite').slice(8, 32));
      this.id = sessionStorage.getItem('IdCalendar');
      this.seanceservice.getSeanceByUniversiteId(this.id).subscribe(
        data => {
          this.events = data;
          return this.events;
        });
    } else if (localStorage.getItem('Roles').includes('ENSEIGNANT')) {
      sessionStorage.setItem('IdCalendar', localStorage.getItem('Id'));
      this.id = sessionStorage.getItem('IdCalendar');
      this.seanceservice.getBySeanceIdEnsignant(this.id).subscribe(
        data => {
          this.events = data;
          return this.events;
        });
    }
    else if (localStorage.getItem('Roles').includes('ETUDIANT')) {
      sessionStorage.setItem('IdCalendar', localStorage.getItem('Class').slice(8, 32));
      this.id = sessionStorage.getItem('IdCalendar');
      this.seanceservice.getSeanceByClassId(this.id).subscribe(
        data => {
          this.events = data;
          return this.events;
        });
    }
  }

  getNoteById() {
    this.noteservice.getNoteById(localStorage.getItem('Id')).subscribe(
      data => {
        this.notes = data;
        return this.notes;
      }
    );
  }

  getEventById() {
    this.eventservice.getEventByUserId(localStorage.getItem('Id')).subscribe(
      data => {
        this.listEvent = data;
        return this.listEvent;
      }
    );
  }

  getMatByUniversiteId() {
    if (localStorage.getItem('Roles').includes('ADMINISTRATEUR')) {
      this.id = sessionStorage.getItem('IdUniversite');
    } else if (localStorage.getItem('Roles').includes('UNIVERSITE')) {
      this.id = localStorage.getItem('Id');
    }
    this.matiereservice.getMatByUniversiteId(this.id).subscribe(
      data => {
        this.matieres = data;
        return this.matieres;
      }
    );
  }

  getAllEnseignantByUniversiteId() {
    if (localStorage.getItem('Roles').includes('UNIVERSITE')) {
      this.id = localStorage.getItem('Id');
    } else if (localStorage.getItem('Roles').includes('ADMINISTRATEUR')) {
      this.id = sessionStorage.getItem('IdUniversite');
    }
    this.userservice.getEnseignantByUniversiteId(this.id).subscribe(
      data => {
        this.enseignants = data;
        return this.enseignants;
      }
    );
  }

  getSalleByUniversiteId() {
    if (localStorage.getItem('Roles').includes('ADMINISTRATEUR')) {
      this.id = sessionStorage.getItem('IdUniversite');
    } else if (localStorage.getItem('Roles').includes('UNIVERSITE')) {
      this.id = localStorage.getItem('Id');
    }
    this.salleservice.getSalleByUniversiteId(this.id).subscribe(
      data => {
        this.salles = data;
        return this.salles;
      }
    );
  }

  getClassByUniversiteId() {
    if (localStorage.getItem('Roles').includes('ADMINISTRATEUR')) {
      this.id = sessionStorage.getItem('IdUniversite');
    } else if (localStorage.getItem('Roles').includes('UNIVERSITE')) {
      this.id = localStorage.getItem('Id');
    }
    this.classeservice.getClassByUniversiteId(this.id).subscribe(
      data => {
        this.classes = data;
        return this.classes;
      }
    );
  }


  active: boolean;
  get c() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    this.alertService.clear();
    if (this.form.invalid) {
      return;
    }
    if (localStorage.getItem('Roles').includes('ADMINISTRATEUR')) {
      this.id = sessionStorage.getItem('IdUniversite');
    } else if (localStorage.getItem('Roles').includes('UNIVERSITE')) {
      this.id = localStorage.getItem('Id');
    }
    this.seanceservice.addSeance(this.id, this.form.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration Successful', { keepAfterRouteChange: true });
          this.hidemsg = false;
          this.msg = 'Event Added Succeffuly !';
          return data;
        },
        error => {
          this.alertService.error(error);
        }
      );
  }

  get n() { return this.formNote.controls; }

  onNote() {
    this.submitted = true;
    this.alertService.clear();
    if (this.formNote.invalid) {
      return;
    }

    this.noteservice.addNote(localStorage.getItem('Id'), this.formNote.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration Successful', { keepAfterRouteChange: true });
          this.hidemsg = false;
          this.msg = 'Note Added Succeffuly !';
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

  openEvenementAlert(contentEvenementAlert: any) {
    this.modalService.open(contentEvenementAlert, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openNote(contentNote: any) {
    this.modalService.open(contentNote, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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

  openAlert(contentAlert: any) {
    this.modalService.open(contentAlert, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openNoteAlert(contentNoteAlert: any) {
    this.modalService.open(contentNoteAlert, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  deleteSeance() {
    this.seanceservice.deleteSeance(sessionStorage.getItem('IdSeance')).subscribe(
      data => data
    );
  }

  deleteNote() {
    this.noteservice.deleteNote(sessionStorage.getItem('IdNote')).subscribe(
      data => data
    );
  }

  deleteEvenement() {
    this.eventservice.deleteEvent(sessionStorage.getItem('IdEvenement')).subscribe(
      data => data
    );
  }

  setIdSeance(id: any) {
    sessionStorage.setItem('IdSeance', id);
  }

  setIdNote(id: any) {
    sessionStorage.setItem('IdNote', id);
  }

  setIdEvenement(id: any) {
    sessionStorage.setItem('IdEvenement', id);
  }

  showEditForm() {
    this.edit = true;
  }

  showAddEvents() {
    if (localStorage.getItem('Roles').includes('ADMINISTRATEUR') || localStorage.getItem('Roles').includes('UNIVERSITE')) {
      this.showaddevent = true;
    }
  }
}
