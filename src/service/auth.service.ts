import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from 'src/model/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/v1/api/';
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  constructor(private _http: HttpClient) {}

  public createAccount(user: User): Observable<User> {
    return this._http
      .post<User>(`${this.apiUrl}`.concat('create'), user)
      .pipe(catchError(this.handleError));
  }

  public signUp(user: User): Observable<User[]> {
    return this._http
      .post<User[]>(`${this.apiUrl}`.concat('signin'), user)
      .pipe(catchError(this.handleError));
  }

  public getUsers(): Observable<User> {
    return this._http
      .get<User>(`${this.apiUrl}`.concat('allUser'))
      .pipe(catchError(this.handleError));
  }

  public deleteUser(resourceId: number): Observable<User>{
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.getToken(),
      'Content-Type': 'application/json'
    });
    const options = { headers: headers };
     return this._http.delete<User>(`${this.apiUrl}delete/${resourceId}`, options);
  }

  public saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }

  public isLoggedIn(): boolean {
    const token = this.getToken();
    console.log(token)
    if(token === null){
      debugger
      return false
    }else{
      return true
    }

  }

  public logout(): void {
    localStorage.removeItem('token');
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // You can log the error or display it in a user-friendly way
    console.error('Error message from service file ', errorMessage);
    return throwError(errorMessage);
  }
}
