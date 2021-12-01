import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { FscProductType } from '@app/models/master/FscProductType';


@Injectable({
  providedIn: 'root'
})
export class FscProducttypeL1Service {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  addFscTypeOneData(data){
    return this.http.post<any>(`${environment.apiUrl}/master/fsc-producttype-l1/create`, data);
  } 

  getProductType(id): Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}/master/fsc-producttype-l1/view`,{id});
  }
  
  getProductTypeList(): Observable<FscProductType[]>{
    return this.http.get<FscProductType[]>(`${environment.apiUrl}/master/fsc-producttype-l1/index`);
  }  
  
  updateData(formData): Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}/master/fsc-producttype-l1/update`, formData,this.httpOptions);
  }

  getProductList(): Observable<FscProductType[]>{
    return this.http.get<FscProductType[]>(`${environment.apiUrl}/master/fsc-producttype-l1/get-product`);
  } 

  
}
