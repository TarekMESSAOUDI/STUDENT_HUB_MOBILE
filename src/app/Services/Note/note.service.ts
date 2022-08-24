import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  baseURL = 'http://localhost:9091/Note/';

  constructor(private notehttp: HttpClient) { }

  addNote(id: any, note: any): Observable<any> {
    return this.notehttp.post(this.baseURL + 'addNote/' + id, note);
  }

  getNoteById(id: any): Observable<any> {
    return this.notehttp.get(this.baseURL + 'getNoteById/' + id);
  }

  deleteNote(id: any): Observable<any> {
    return this.notehttp.delete(this.baseURL + 'deleteNote/' + id);
  }
}
