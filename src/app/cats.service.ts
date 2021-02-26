import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cat } from './cat';

@Injectable({
  providedIn: 'root'
})
export class CatsService {
  private catsURL = 'https://api.thecatapi.com/v1/breeds';

  myapikey="bcbc8244-3039-4e81-9fa0-502957877a2f";
  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'x-api-key': this.myapikey,
  }

  requestOptions = {                                 
    headers: new HttpHeaders (this.headerDict), 
  };

  constructor(private http: HttpClient) { }

  /** GET breed info from the server */
  getCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(this.catsURL, this.requestOptions);
  }

}
