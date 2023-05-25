import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Common } from '../common/common';
import { Observable, catchError, map, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { Login } from '../auth/signin/signin.component';
import { SignUp } from '../auth/signup/signup.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private httpClient: HttpClient) { }

login (creds: Login)
{
 
  const body = JSON.stringify(creds);
  console.log(body)
  return this.httpClient.get<Login>(Common.baseURL + '/user/login?userName='+creds.username+'&password='+creds.user_Pwd).pipe(
    map((data: any) => {
      return data;
    }), catchError((error) => {
      Swal.fire('Something went wrong, Please try again.', error.error, 'error');
      return throwError(error.message);
    }));
}
   

signup(signup : SignUp)
{
  let queryParams = new HttpParams()
  .set('Content-Type', 'application/json');
  ;
  console.log(" signup :: ", signup);
  return this.httpClient.post<SignUp>(Common.baseURL + '/user',signup, {'params': queryParams }  ).pipe(
    map((data: any) => {
      return data;
    }), catchError((error) => {
      Swal.fire('Something went wrong, Please try again.', error.error, 'error');
      return throwError(error.message);
    }));
}


  getProduct() {
    console.log(Common.baseURL)
    return this.httpClient.get<Product[]>(Common.baseURL + '/product').pipe(
      map((data: Product[]) => {
        return data;
      }), catchError((error) => {
        Swal.fire('Something went wrong, Please try again.', error.error, 'error');
        return throwError(error.message);
      }));
  }

}

export class Product{
public name : string =""; 
public description : string ="";
public price: number = 0;
  
}