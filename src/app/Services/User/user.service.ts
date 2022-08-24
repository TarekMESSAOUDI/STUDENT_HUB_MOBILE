/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
const TOKEN = 'Token';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  public baseURL = 'http://localhost:9091/User';

  constructor(private userhttp: HttpClient) {

    this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem(TOKEN));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  /////////////////////////////////IMAGE////////////////////////////////

  changeProfileImage(file: any, id: any): Observable<any> {
    return this.userhttp.put<any>(this.baseURL + '/Image/profile/' + id, file);
  }
  changeCoverImage(file: any, id: any): Observable<any> {
    return this.userhttp.put<any>(this.baseURL + '/Image/cover/' + id, file);
  }

  changeInstitutImage(file: any, id: any): Observable<any> {
    return this.userhttp.put<any>(this.baseURL + '/Image/institut/' + id, file);
  }

  ///////////////////////////////////////USER/////////////////////////////////

  signIn(authentification: any) {
    return this.userhttp.post<any>(this.baseURL + '/signin', authentification, httpOptions);
  }

  updateMDP(updatePassword: any): Observable<any> {
    return this.userhttp.put<any>(this.baseURL + '/forgotPassword', updatePassword);
  }

  changeMDP(changepassword: any, id: any) {
    return this.userhttp.put(this.baseURL + '/updateMDP/' + id, changepassword);
  }

  getAllUsers(): Observable<any> {
    return this.userhttp.get(this.baseURL + '/getAll');
  }

  findById(id: any): Observable<any> {
    return this.userhttp.get<any>(this.baseURL + '/getById/' + id);
  }

  deleteUser(id: any): Observable<any> {
    return this.userhttp.delete(this.baseURL + '/delete/' + id);
  }

  updateUser(user: any, id: any): Observable<any> {
    return this.userhttp.put<any>(this.baseURL + '/update/' + id, user);
  }

  updateProfile(user: any, id: any): Observable<any> {
    return this.userhttp.put<any>(this.baseURL + '/updateProfile/' + id, user);
  }

  countUsers(): Observable<any> {
    return this.userhttp.get(this.baseURL + '/Count');
  }

  activerUser(id: any): Observable<any> {
    return this.userhttp.put(this.baseURL + '/activer/' + id, null);
  }

  //////////////////////////////////////ADMIN////////////////////////////////

  addAdmin(user: any): Observable<any> {
    return this.userhttp.post<any>(this.baseURL + '/signupAdmin', user);
  }

  getAllAdmin(): Observable<any> {
    return this.userhttp.get(this.baseURL + '/getAllAdmin');
  }

  getCountAdmin(): Observable<any> {
    return this.userhttp.get(this.baseURL + '/CountAdmin');
  }

  /////////////////////////////////////UNIVERSITE///////////////////////////


  getAllUniversities(): Observable<any> {
    return this.userhttp.get(this.baseURL + '/getAllUniversities');
  }

  addUniversite(user: any): Observable<any> {
    return this.userhttp.post<any>(this.baseURL + '/signupUniversite', user);
  }

  getCountUniversities(): Observable<any> {
    return this.userhttp.get(this.baseURL + '/CountUniversite');
  }

  ////////////////////////////////////ETUDIANT/////////////////////////////

  getAllEtudiants(): Observable<any> {
    return this.userhttp.get(this.baseURL + '/getAllEtudiant');
  }

  getEtudiantsByClass(id: any): Observable<any> {
    return this.userhttp.get(this.baseURL + '/getEtudiantByClassId/' + id);
  }

  addEtudiant(user: any, idU: any, idC: any, institutImage: any): Observable<any> {
    return this.userhttp.post<any>(this.baseURL + '/signupEtudiant/' + idU + '/' + idC + '/' + institutImage, user);
  }

  getCountEtudiant(): Observable<any> {
    return this.userhttp.get(this.baseURL + '/CountEtudiant');
  }

  getCountEtudiantByClassId(id: any): Observable<any> {
    return this.userhttp.get(this.baseURL + '/countEtudiantByClassId/' + id);
  }

  ///////////////////////////////////ENSEIGNANT///////////////////////////

  getAllEnseignant(): Observable<any> {
    return this.userhttp.get(this.baseURL + '/getAllEnseignant');
  }

  addEnseignant(user: any, id: any, institutImage: any): Observable<any> {
    return this.userhttp.post<any>(this.baseURL + '/signupEnseignant/' + id + '/' + institutImage, user);
  }

  getCountEnseignant(): Observable<any> {
    return this.userhttp.get(this.baseURL + '/CountEnseignant');
  }

  getCountEnseignantByUniversiteId(id: any): Observable<any> {
    return this.userhttp.get(this.baseURL + '/CountEnseignantByUniversiteId/' + id);
  }

  getEnseignantByUniversiteId(id: any): Observable<any> {
    return this.userhttp.get(this.baseURL + '/getEnseignantByUniversiteId/' + id);
  }

  //////////////////////////////////CLUB/////////////////////////////////

  getAllClub(): Observable<any> {
    return this.userhttp.get(this.baseURL + '/getAllClub');
  }
  s;
  addClub(user: any, idU: any, institutImage: any): Observable<any> {
    return this.userhttp.post<any>(this.baseURL + '/signupClub/' + idU + '/' + institutImage, user);
  }

  getCountClub(): Observable<any> {
    return this.userhttp.get(this.baseURL + '/CountClub');
  }

  getCountClubByUniversiteId(id: any): Observable<any> {
    return this.userhttp.get(this.baseURL + '/CountClubByUniversiteId/' + id);
  }

  getClubByUniversiteId(id: any): Observable<any> {
    return this.userhttp.get(this.baseURL + '/getClubByUniversiteId/' + id);
  }

}

