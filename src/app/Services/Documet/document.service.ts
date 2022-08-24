import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  baseURL = 'http://localhost:9091/Document/';

  constructor(private documenthttp: HttpClient) { }

  getByCategorieAndMatiereId(categorie: string, matiere: any): Observable<any> {
    return this.documenthttp.get(this.baseURL + 'getByCategorieAndMatiere/' + categorie + '/' + matiere);
  }

  delete(id: any): Observable<any> {
    return this.documenthttp.delete(this.baseURL + 'delete/' + id);
  }

  addDocument(idU: any, idM: any, categorie: any, document: any): Observable<any> {
    return this.documenthttp.post(this.baseURL + 'addDocument/' + idU + '/' + idM + '/' + categorie, document);
  }
}
