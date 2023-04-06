import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAuthService } from './user-auth.service';
import { IProduct } from './models/product-model';



const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' },)
};

@Injectable({
    providedIn: 'root'
})

export class productsService {


    constructor(private httpclient: HttpClient,
        private userAuthService: UserAuthService) { }


public getProducts():Observable<any>{
    return this.httpclient.get('http://localhost:8080/api/product/getProducts',httpOptions)
}
public getProductsById(id:any):Observable<any>{
    return this.httpclient.get(`http://localhost:8080/api/product/getProducts/${id}`)
}
public create(tenant: IProduct): Observable<any> {
    return this.httpclient.post<IProduct>('http://localhost:8080/api/product/addProducts', tenant, { observe: 'response' });
  }
 public delete(id: string): Observable<HttpResponse<any>> {
    return this.httpclient.delete<any>(`http://localhost:8080/api/product/deleteProducts/${id}`, { observe: 'response' });
  }


}
