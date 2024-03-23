import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  postData(url:any,payload:any):Observable<any>{
    return this.http.post(url, payload,{observe:'response',withCredentials: false});
  }
}
