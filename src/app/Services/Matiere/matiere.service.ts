import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {

  baseURL = 'http://localhost:9091/Matiere';

  constructor(private matierehttp: HttpClient) { }

  addMatiere(id: any, matiere: any): Observable<any> {
    return this.matierehttp.post(this.baseURL + '/addMatiere/' + id, matiere);
  }
  getMatByUniversiteId(id: any): Observable<any> {
    return this.matierehttp.get(this.baseURL + '/getMatByUniversiteId/' + id);
  }
  countMatByUniversiteId(id: any): Observable<any> {
    return this.matierehttp.get(this.baseURL + '/countMatByUniversiteId/' + id);
  }
  deleteMatiere(id: any): Observable<any> {
    return this.matierehttp.delete(this.baseURL + '/deleteMatiere/' + id);
  }
}
