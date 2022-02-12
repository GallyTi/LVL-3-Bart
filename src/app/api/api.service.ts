import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GETCategoryFiles } from '../gallery/gallery';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly URL = 'http://api.programator.sk';

  constructor(private http : HttpClient) { }

  category() : Observable<GETCategoryFiles[]> {
    return this.http.get<GETCategoryFiles[]>(this.URL + '/gallery');
  }
}
