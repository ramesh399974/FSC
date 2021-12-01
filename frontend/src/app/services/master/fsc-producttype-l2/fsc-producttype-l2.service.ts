import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { FscProductType } from '@app/models/master/FscProductType';

@Injectable({
  providedIn: 'root'
})
export class FscProducttypeL2Service {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  addFscTypetwoData(data)
  {
    return this.http.post<any>(`${environment.apiUrl}/master/fsc-producttype-l2/create`, data);
  } 

  getProductList(): Observable<FscProductType[]>
  {
    return this.http.get<FscProductType[]>(`${environment.apiUrl}/master/fsc-producttype-l2/get-product`);
  } 
}

