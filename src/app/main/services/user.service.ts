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

export class UserService {


    constructor(private httpclient: HttpClient,
        private userAuthService: UserAuthService) { }

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
public getProducts():Observable<any>{
    return this.httpclient.get('http://localhost:8080/api/product/getProducts',httpOptions)
}

 public forAdmin(){
  return  this.httpclient.get(PATH_OF_TEST+'admin',{
        responseType:'text'
    })
 }
 public forAll(){
    return  this.httpclient.get(PATH_OF_TEST+'all',{
          responseType:'text'
      })
   }
    // public roleMatch(allowedRoles): boolean {
    //     let isMatch = false
    //     const userRoles:[] = this.userAuthService.getRoles();
    //     console.log(this.userAuthService.getRoles(),'alut')
    //     if (userRoles != null && userRoles) {
            
    //                 if (userRoles === allowedRoles) {
    //                     isMatch = true
    //                     return isMatch;
    //                 } else {
    //                     return isMatch; 
    //                 }
    //             }
        
    // }

    public roleMatch(allowedRoles): boolean {
        let isMatch = false
        const userRoles: any = this.userAuthService.getRoles();
        console.log(userRoles,'alut')
        if (userRoles != null && userRoles) {
           
                    if (userRoles === allowedRoles) {
                        isMatch = true
                        return isMatch;
                    } else {
                        return isMatch; 
                    }
        }
    }


}
