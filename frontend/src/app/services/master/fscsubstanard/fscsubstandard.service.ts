import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '@environments/environment';
import { FscSubStandard } from '@app/models/master/FscSubStandard';


@Injectable({
  providedIn: 'root'
})           
export class FscSubStandardService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
      
  getFscStandard(id): Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}/master/fsc-sub-standard/view`,{id});
  }
  
  getStandardList(): Observable<FscSubStandard[]>{
    return this.http.get<FscSubStandard[]>(`${environment.apiUrl}/master/fsc-standard/get-fsc-standard`);
  }  
  
  updateData(formData): Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}/master/fsc-sub-standard/update`, formData,this.httpOptions);
 }
  
  addData(data){
    return this.http.post<any>(`${environment.apiUrl}/master/fsc-sub-standard/create`, data);
  } 
}
