import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAuthService } from './user-auth.service';


const PATH_OF_API = "http://localhost:8080/api/auth/"
const PATH_OF_TEST="http://localhost:8080/api/test/"
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



}
