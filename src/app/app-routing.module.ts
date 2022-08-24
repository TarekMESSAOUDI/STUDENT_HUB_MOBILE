/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthentificationPage } from './Pages/authentification/authentification.page';
import { BlogPage } from './Pages/blog/blog.page';
import { BlogsPage } from './Pages/blogs/blogs.page';
import { CalendarPage } from './Pages/calendar/calendar.page';
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
import { EventsPage } from './Pages/events/events.page';
import { FilierePage } from './Pages/filiere/filiere.page';
import { ForgotPasswordPage } from './Pages/forgot-password/forgot-password.page';
import { GestionBlogPage } from './Pages/gestion-blog/gestion-blog.page';
import { GestionDocumentPage } from './Pages/gestion-document/gestion-document.page';
import { GestionEventPage } from './Pages/gestion-event/gestion-event.page';

import { HomePage } from './Pages/home/home.page';
import { HowItWorkPage } from './Pages/how-it-work/how-it-work.page';
import { MatierePage } from './Pages/matiere/matiere.page';
import { NiveauPage } from './Pages/niveau/niveau.page';
import { PartnerShipPage } from './Pages/partner-ship/partner-ship.page';
import { ProfileSettingsPage } from './Pages/profile-settings/profile-settings.page';
import { ProfilePage } from './Pages/profile/profile.page';
import { SallePage } from './Pages/salle/salle.page';
import { SpecialitePage } from './Pages/specialite/specialite.page';
import { TableClubPage } from './Pages/table-club/table-club.page';
import { TableEnseignantPage } from './Pages/table-enseignant/table-enseignant.page';
import { TableEtudiantPage } from './Pages/table-etudiant/table-etudiant.page';
import { UniversityPage } from './Pages/university/university.page';
import { UpdateMdpPage } from './Pages/update-mdp/update-mdp.page';

import { GuardAdministrateurService } from './Services/GuardAdministrateur/guard-administrateur.service';
import { GuardAdminOrUniversiteService } from './Services/GuardAdminOrUniversite/guard-admin-or-universite.service';
import { GuardNoAdminServiceService } from './Services/GuardNoAdminService/guard-no-admin-service.service';
import { GuardVisitorService } from './Services/GuardVisitor/guard-visitor.service';

const routes: Routes = [
  //Accueil:
  {
    path: 'home',
    children: [
      { path: '', component: HomePage }, //http://localhost:4200/home
      { path: 'contact', component: ContactPage }, //http://localhost:4200/home/contact
      //{ path: 'Register', component: RegisterComponent }, //http://localhost:4200/Register
      { path: 'howitwork', component: HowItWorkPage }, //http://localhost:4200/home/howitwork
      { path: 'partnership', component: PartnerShipPage }, //http://localhost:4200/home/partnership
      {
        path: '',
        children: [
          { path: 'profile', component: ProfilePage, canActivate: [GuardVisitorService] },//http://localhost:4200/home/profile/:id
          { path: 'settings', component: ProfileSettingsPage, canActivate: [GuardVisitorService] }, //http://localhost:4200/home/:id/settings
          { path: 'universities', component: EspaceAdminPage, canActivate: [GuardAdministrateurService] }, //http://localhost:4200/home/profile/:id/admin
          { path: 'table-enseignant', component: TableEnseignantPage, canActivate: [GuardAdminOrUniversiteService] }, //http://localhost:4200/home/table-enseignant
          { path: 'table-etudiant', component: TableEtudiantPage, canActivate: [GuardAdminOrUniversiteService] }, //http://localhost:4200/home/table-etudiant
          { path: 'table-club', component: TableClubPage, canActivate: [GuardAdminOrUniversiteService] }, //http://localhost:4200/home/table-club
          { path: 'gestion-blog', component: GestionBlogPage, canActivate: [GuardVisitorService] }, //http://localhost:4200/home/gestion-blog
          { path: 'filiere', component: FilierePage, canActivate: [GuardAdminOrUniversiteService] }, //http://localhost:4200/home/filiere
          { path: 'specialite', component: SpecialitePage, canActivate: [GuardAdminOrUniversiteService] }, //http://localhost:4200/home/specialite
          { path: 'university', component: UniversityPage, canActivate: [GuardAdminOrUniversiteService] }, //http://localhost:4200/home/university
          { path: 'niveau', component: NiveauPage, canActivate: [GuardAdminOrUniversiteService] }, //http://localhost:4200/home/niveau
          { path: 'class', component: ClassPage, canActivate: [GuardAdminOrUniversiteService] }, //http://localhost:4200/home/class
          { path: 'salle', component: SallePage, canActivate: [GuardAdminOrUniversiteService] },//http://localhost:4200/home/salle
          { path: 'matiere', component: MatierePage, canActivate: [GuardVisitorService] },//http://localhost:4200/home/matiere
          { path: 'calendar', component: CalendarPage, canActivate: [GuardVisitorService] },//http://localhost:4200/home/calendar
          { path: 'gestion-document', component: GestionDocumentPage, canActivate: [GuardVisitorService] },//http://localhost:4200/home/gestion-document
          { path: 'changeMdp', component: ChangePasswordPage, canActivate: [GuardVisitorService] },//http://localhost:4200/home/changeMdp
          { path: 'changePImage', component: ChangeProfileImagePage, canActivate: [GuardVisitorService] },//http://localhost:4200/home/changePImage
          { path: 'changeCImage', component: ChangeCoverImagePage, canActivate: [GuardVisitorService] },//http://localhost:4200/home/changeCImage
          { path: 'changeIImage', component: ChangeInstitutImagePage, canActivate: [GuardAdminOrUniversiteService] },//http://localhost:4200/home/changeIImage
          { path: 'gestion-event', component: GestionEventPage },//http://localhost:4200/home/gestion-event
          { path: 'documents-scolaire', component: DocumentsScolairePage, canActivate: [GuardNoAdminServiceService] },//http://localhost:4200/home/documents-scolaire
          { path: 'demande-document', component: DemandeDocumentPage, canActivate: [GuardNoAdminServiceService] },//http://localhost:4200/home/demande-document
          { path: 'calendrier-universitaire', component: CalendrierUniversitairePage, canActivate: [GuardVisitorService] },//http://localhost:4200/home/calendrier-universitaire
        ],
      },
      {
        path: 'login',
        children: [
          { path: '', component: AuthentificationPage },//http://localhost:4200/home/login
          { path: 'confidentialite', component: ConfidentialitePage },//http://localhost:4200/home/login/confidentialite
          { path: 'forgotpassword', component: ForgotPasswordPage },//http://localhost:4200/home/login/forgotpassword
          { path: 'updateMDP', component: UpdateMdpPage, canActivate: [GuardVisitorService] },//http://localhost:4200/home/login/updateMDP
        ],
      },
      {
        path: 'blogs',
        children: [
          { path: '', component: BlogsPage }, //http://localhost:4200/home/blogs
          { path: 'blog', component: BlogPage, canActivate: [GuardVisitorService] }, //http://localhost:4200/home/blogs/blog
        ]
      },
      {
        path: 'events',
        children: [
          { path: '', component: EventsPage }, //http://localhost:4200/home/events
          { path: 'event', component: EventPage, canActivate: [GuardVisitorService] }, //http://localhost:4200/home/events/event
        ]
      },

    ]
  },

  { path: '**', component: HomePage },
  {
    path: 'authentification',
    loadChildren: () => import('./Pages/authentification/authentification.module').then(m => m.AuthentificationPageModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./Pages/blog/blog.module').then(m => m.BlogPageModule)
  },
  {
    path: 'blogs',
    loadChildren: () => import('./Pages/blogs/blogs.module').then(m => m.BlogsPageModule)
  },

  {
    path: 'calendrier-universitaire',
    loadChildren: () => import('./Pages/calendrier-universitaire/calendrier-universitaire.module').then(m => m.CalendrierUniversitairePageModule)
  },
  {
    path: 'change-cover-image',
    loadChildren: () => import('./Pages/change-cover-image/change-cover-image.module').then(m => m.ChangeCoverImagePageModule)
  },
  {
    path: 'change-institut-image',
    loadChildren: () => import('./Pages/change-institut-image/change-institut-image.module').then(m => m.ChangeInstitutImagePageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./Pages/change-password/change-password.module').then(m => m.ChangePasswordPageModule)
  },
  {
    path: 'change-profile-image',
    loadChildren: () => import('./Pages/change-profile-image/change-profile-image.module').then(m => m.ChangeProfileImagePageModule)
  },
  {
    path: 'class',
    loadChildren: () => import('./Pages/class/class.module').then(m => m.ClassPageModule)
  },
  {
    path: 'confidentialite',
    loadChildren: () => import('./Pages/confidentialite/confidentialite.module').then(m => m.ConfidentialitePageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./Pages/contact/contact.module').then(m => m.ContactPageModule)
  },
  {
    path: 'demande-document',
    loadChildren: () => import('./Pages/demande-document/demande-document.module').then(m => m.DemandeDocumentPageModule)
  },
  {
    path: 'espace-admin',
    loadChildren: () => import('./Pages/espace-admin/espace-admin.module').then(m => m.EspaceAdminPageModule)
  },
  {
    path: 'event',
    loadChildren: () => import('./Pages/event/event.module').then(m => m.EventPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./Pages/events/events.module').then(m => m.EventsPageModule)
  },
  {
    path: 'filiere',
    loadChildren: () => import('./Pages/filiere/filiere.module').then(m => m.FilierePageModule)
  },
  {
    path: 'footer',
    loadChildren: () => import('./Pages/footer/footer.module').then(m => m.FooterPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./Pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
  {
    path: 'gestion-blog',
    loadChildren: () => import('./Pages/gestion-blog/gestion-blog.module').then(m => m.GestionBlogPageModule)
  },
  {
    path: 'gestion-document',
    loadChildren: () => import('./Pages/gestion-document/gestion-document.module').then(m => m.GestionDocumentPageModule)
  },
  {
    path: 'gestion-event',
    loadChildren: () => import('./Pages/gestion-event/gestion-event.module').then(m => m.GestionEventPageModule)
  },
  {
    path: 'header',
    loadChildren: () => import('./Pages/header/header.module').then(m => m.HeaderPageModule)
  },
  {
    path: 'how-it-work',
    loadChildren: () => import('./Pages/how-it-work/how-it-work.module').then(m => m.HowItWorkPageModule)
  },
  {
    path: 'matiere',
    loadChildren: () => import('./Pages/matiere/matiere.module').then(m => m.MatierePageModule)
  },
  {
    path: 'niveau',
    loadChildren: () => import('./Pages/niveau/niveau.module').then(m => m.NiveauPageModule)
  },
  {
    path: 'partner-ship',
    loadChildren: () => import('./Pages/partner-ship/partner-ship.module').then(m => m.PartnerShipPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./Pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'profile-settings',
    loadChildren: () => import('./Pages/profile-settings/profile-settings.module').then(m => m.ProfileSettingsPageModule)
  },
  {
    path: 'salle',
    loadChildren: () => import('./Pages/salle/salle.module').then(m => m.SallePageModule)
  },
  {
    path: 'sidebar',
    loadChildren: () => import('./Pages/sidebar/sidebar.module').then(m => m.SidebarPageModule)
  },
  {
    path: 'specialite',
    loadChildren: () => import('./Pages/specialite/specialite.module').then(m => m.SpecialitePageModule)
  },
  {
    path: 'table-enseignant',
    loadChildren: () => import('./Pages/table-enseignant/table-enseignant.module').then(m => m.TableEnseignantPageModule)
  },
  {
    path: 'table-etudiant',
    loadChildren: () => import('./Pages/table-etudiant/table-etudiant.module').then(m => m.TableEtudiantPageModule)
  },
  {
    path: 'university',
    loadChildren: () => import('./Pages/university/university.module').then(m => m.UniversityPageModule)
  },
  {
    path: 'update-mdp',
    loadChildren: () => import('./Pages/update-mdp/update-mdp.module').then(m => m.UpdateMdpPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./Pages/calendar/calendar.module').then(m => m.CalendarPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
