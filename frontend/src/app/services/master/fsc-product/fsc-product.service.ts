import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {Product} from '@app/models/master/product';
import { FscProductType } from '@app/models/master/FscProductType';

@Injectable({
  providedIn: 'root'
})
export class FscProductService {
  
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  getProduct(id): Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}/master/fsc-product/view`,{id});
  }

  addFscData(data){
    return this.http.post<any>(`${environment.apiUrl}/master/fsc-product/create`, data);
  } 

  updateData(formData): Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}/master/fsc-product/update`, formData,this.httpOptions);
  }

  getProductList(): Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.apiUrl}/master/fsc-product/get-product`);
  }  

  getFscProductTypes(id): Observable<FscProductType[]>{
    
    let params = new HttpParams();
    params = params.append('id', id);
    return this.http.get<FscProductType[]>(`${environment.apiUrl}/master/fsc-product/fsc-producttype`,{params:params});
  }

  getFscProductTypesOne(id): Observable<FscProductType[]>{
    
    let params = new HttpParams();
    params = params.append('id', id);
    return this.http.get<FscProductType[]>(`${environment.apiUrl}/master/fsc-product/fsc-producttype-one`,{params:params});
  }

  getFscProductTypesTwo(id): Observable<FscProductType[]>{
    
    let params = new HttpParams();
    params = params.append('id', id);
    return this.http.get<FscProductType[]>(`${environment.apiUrl}/master/fsc-product/fsc-producttype-two`,{params:params});
  }
}
