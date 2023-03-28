import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const PATH_OF_API = "http://localhost:8080/api/auth/"
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' },)
};

@Injectable({
    providedIn: 'root'
})

export class UserService {


    constructor(private httpclient: HttpClient) { }

    login(username: string, password: string): Observable<any> {
        return this.httpclient.post(
            PATH_OF_API + 'signin',
            {
                username,
                password,
            },
            httpOptions
            
        );
    }
}
