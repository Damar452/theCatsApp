import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Cat } from '../models/cat-interface';

@Injectable({
  providedIn: 'root'
})
export class ApiCatsService {

  constructor(private http: HttpClient) { }

  public getCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(`${environment.api}/breeds`);
  }
}
