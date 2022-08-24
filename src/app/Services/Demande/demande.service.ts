import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  baseURL = 'http://localhost:9091/DemandeDocument/';

  constructor(private demandehttp: HttpClient) { }

  getDemandeByUniversite(id: any): Observable<any> {
    return this.demandehttp.get(this.baseURL + 'getByUniversite/' + id);
  }

  getDemandeByIdUser(id: any): Observable<any> {
    return this.demandehttp.get(this.baseURL + 'getByIdUser/' + id);
  }

  ready(id: any, tx: any): Observable<any> {
    return this.demandehttp.put(this.baseURL + 'Ready/' + id + '/' + tx, null);
  }

  addDemande(id: any, demande: any): Observable<any> {
    return this.demandehttp.post(this.baseURL + 'addDemande/' + id, demande);
  }

  deleteDemande(id: any): Observable<any> {
    return this.demandehttp.delete(this.baseURL + '/delete/' + id);
  }
}
