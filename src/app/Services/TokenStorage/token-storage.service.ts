import { Injectable } from '@angular/core';

const ID = 'Id';
const ROLES = 'Roles';
const TOKEN = 'Token';
const PROFILE_IMAGE = 'profileImage';
const CLASSE = 'Class';
const INSTITUT = 'Universite';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {


  private roles: string[];
  private institut: string[];
  private classe: string[];

  constructor() { }

  public saveId(id: string) {
    window.localStorage.removeItem(ID);
    window.localStorage.setItem(ID, id);
  }

  public getId(): string {
    return localStorage.getItem(ID);
  }

  public saveRoles(roles: string[]) {
    window.localStorage.removeItem(ROLES);
    window.localStorage.setItem(ROLES, JSON.stringify(roles));
  }

  public getRoles(): string[] {
    this.roles = [];

    if (localStorage.getItem(ROLES)) {
      JSON.parse(localStorage.getItem(ROLES)).forEach(authority => {
        this.roles.push(authority.authority);
      });
    }
    return this.roles;
  }

  public saveToken(token: string) {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN, token);
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN);
  }

  public saveProfileImage(profileImage: string) {
    window.localStorage.removeItem(PROFILE_IMAGE);
    window.localStorage.setItem(PROFILE_IMAGE, profileImage);
  }

  public getProfileImage(): string {
    return localStorage.getItem(PROFILE_IMAGE);
  }

  public saveClass(classe: string[]) {
    window.localStorage.removeItem(CLASSE);
    window.localStorage.setItem(CLASSE, JSON.stringify(classe));
  }

  public getClass(): string[] {
    this.classe = [];

    if (localStorage.getItem(CLASSE)) {
      JSON.parse(localStorage.getItem(CLASSE)).forEach(authority => {
        this.classe.push(authority.authority);
      });
    }
    return this.classe;
  }

  public saveInstitut(institut: string[]) {
    window.localStorage.removeItem(INSTITUT);
    window.localStorage.setItem(INSTITUT, JSON.stringify(institut));
  }

  public getInstitut(): string[] {
    this.institut = [];

    if (localStorage.getItem(INSTITUT)) {
      JSON.parse(localStorage.getItem(INSTITUT)).forEach(authority => {
        this.institut.push(authority.authority);
      });
    }
    return this.institut;
  }
}

