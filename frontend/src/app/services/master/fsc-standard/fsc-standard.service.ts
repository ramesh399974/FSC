import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '@environments/environment';
import {Standard} from '@app/models/master/standard';

@Injectable({
  providedIn: 'root'
})
export class FscStandardService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  addData(data){
    return this.http.post<any>(`${environment.apiUrl}/master/fsc-standard/create`, data);
  } 

  getStandard(id): Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}/master/fsc-standard/view`,{id});
  }

  updateData(formData): Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}/master/fsc-standard/update`, formData,this.httpOptions);
  }
}
