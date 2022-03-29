import { AddCategory, AddImage } from './../model/gallery';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GETGallery, GETImagesOfGallery } from '../model/gallery';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly URL = environment.URL;

  constructor(private http : HttpClient) { }

  category() : Observable<GETGallery> {
    return this.http.get<GETGallery>(`${this.URL}/gallery`);
  }

  image(path: string) : Observable<GETImagesOfGallery> {
    return this.http.get<GETImagesOfGallery>(`${this.URL}/gallery/${path}`)
  }
  categoryAdd(name: AddCategory) : Observable<AddCategory> {
    return this.http.post<AddCategory>(`${this.URL}/gallery`, name)
  }
  // addImage(path:string, file:File): Observable<AddImage>{
  //   return this.http.post<AddImage>(`${this.URL}/gallery/${path}`, file)
  // }
  addImages(path:string, file:File): Observable<HttpEvent<any>>{
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.URL}/gallery/${path}`, formData, {
        reportProgress : true,
        responseType : 'json'
    })
    return this.http.request(req);
  }
}