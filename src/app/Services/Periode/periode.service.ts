import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeriodeService {

  baseURL = 'http://localhost:9091/Periode/';

  constructor(private periodehttp: HttpClient) { }

  addPeriode(id: any, periode: any): Observable<any> {
    return this.periodehttp.post(this.baseURL + 'AddPeriode/' + id, periode);
  }

  getByUniversiteId(id: any): Observable<any> {
    return this.periodehttp.get(this.baseURL + 'getByUniversiteId/' + id);
  }

  deletePeriode(id: any): Observable<any> {
    return this.periodehttp.delete(this.baseURL + 'delete/' + id);
  }
}
