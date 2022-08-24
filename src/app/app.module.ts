import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxCaptchaModule } from 'ngx-captcha';
import { HttpClientModule, HttpHeaderResponse, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { QRCodeModule } from 'angular2-qrcode';
import { HomePage } from './Pages/home/home.page';
import { HeaderPage } from './Pages/header/header.page';
import { FooterPage } from './Pages/footer/footer.page';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import resourceTimelinePlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import { EventsPage } from './Pages/events/events.page';
import { ProfilePage } from './Pages/profile/profile.page';
import { AuthentificationPage } from './Pages/authentification/authentification.page';
import { BlogPage } from './Pages/blog/blog.page';
import { BlogsPage } from './Pages/blogs/blogs.page';
import { CalendarPage } from './Pages/calendar/calendar.page';
import { CalendrierUniversitairePageModule } from './Pages/calendrier-universitaire/calendrier-universitaire.module';
import { CalendrierUniversitairePage } from './Pages/calendrier-universitaire/calendrier-universitaire.page';
import { ChangeCoverImagePage } from './Pages/change-cover-image/change-cover-image.page';
import { ChangeInstitutImagePage } from './Pages/change-institut-image/change-institut-image.page';
import { ChangePasswordPage } from './Pages/change-password/change-password.page';
import { ChangeProfileImagePage } from './Pages/change-profile-image/change-profile-image.page';
import { ClassPage } from './Pages/class/class.page';
import { ConfidentialitePage } from './Pages/confidentialite/confidentialite.page';
import { ContactPage } from './Pages/contact/contact.page';
import { DemandeDocumentPage } from './Pages/demande-document/demande-document.page';
import { DocumentsScolairePage } from './Pages/documents-scolaire/documents-scolaire.page';
import { EspaceAdminPage } from './Pages/espace-admin/espace-admin.page';
import { EventPage } from './Pages/event/event.page';
import { FilierePage } from './Pages/filiere/filiere.page';
import { ForgotPasswordPage } from './Pages/forgot-password/forgot-password.page';
import { GestionBlogPage } from './Pages/gestion-blog/gestion-blog.page';
import { GestionDocumentPage } from './Pages/gestion-document/gestion-document.page';
import { GestionEventPage } from './Pages/gestion-event/gestion-event.page';
import { HowItWorkPage } from './Pages/how-it-work/how-it-work.page';
import { MatierePage } from './Pages/matiere/matiere.page';
import { NiveauPage } from './Pages/niveau/niveau.page';
import { PartnerShipPage } from './Pages/partner-ship/partner-ship.page';
import { ProfileSettingsPage } from './Pages/profile-settings/profile-settings.page';
import { SallePage } from './Pages/salle/salle.page';
import { SidebarPage } from './Pages/sidebar/sidebar.page';
import { SpecialitePage } from './Pages/specialite/specialite.page';
import { TableClubPage } from './Pages/table-club/table-club.page';
import { TableEnseignantPage } from './Pages/table-enseignant/table-enseignant.page';
import { TableEtudiantPage } from './Pages/table-etudiant/table-etudiant.page';
import { UniversityPage } from './Pages/university/university.page';
import { UpdateMdpPage } from './Pages/update-mdp/update-mdp.page';

/*FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  resourceTimelinePlugin,
]);*/

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    HeaderPage,
    FooterPage,
    ProfilePage,
    AuthentificationPage,
    BlogPage,
    BlogsPage,
    CalendarPage,
    CalendrierUniversitairePage,
    ChangeCoverImagePage,
    ChangeInstitutImagePage,
    ChangePasswordPage,
    ChangeProfileImagePage,
    ClassPage,
    ConfidentialitePage,
    ContactPage,
    DemandeDocumentPage,
    DocumentsScolairePage,
    EspaceAdminPage,
    EventPage,
    EventsPage,
    FilierePage,
    ForgotPasswordPage,
    GestionBlogPage,
    GestionDocumentPage,
    GestionEventPage,
    HowItWorkPage,
    MatierePage,
    NiveauPage,
    PartnerShipPage,
    ProfileSettingsPage,
    SallePage,
    SidebarPage,
    SpecialitePage,
    TableClubPage,
    TableEnseignantPage,
    TableEtudiantPage,
    UniversityPage,
    UpdateMdpPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    Ng2TelInputModule,
    NgbModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    NgbModalModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    DragDropModule,
    QRCodeModule,
    //FullCalendarModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
