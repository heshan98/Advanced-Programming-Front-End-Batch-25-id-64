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

export class registerService {


    constructor(private httpclient: HttpClient,
        private userAuthService: UserAuthService) { }


public getCustomers():Observable<any>{
    return this.httpclient.get('http://localhost:8080/api/customers/getCustomers',httpOptions)
}
public getCustomersById(id:any):Observable<any>{
    return this.httpclient.get(`http://localhost:8080/api/customers/getCustomers/${id}`)
}
public create(tenant: IProduct): Observable<any> {
    return this.httpclient.post<IProduct>('http://localhost:8080/api/customers/addCustomer', tenant, { observe: 'response' });
  }
 public delete(id: string): Observable<HttpResponse<any>> {
    return this.httpclient.delete<any>(`http://localhost:8080/api/customers/deleteCustomers/${id}`, { observe: 'response' });
  }


}
