import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { readJSON } from "@nebular/theme/schematics/util";

interface myData {
  success: boolean,
  message: string
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  authToken: any;
  user: any;
  apiUrl = 'http://localhost:5000/';

  private loggedInStatus = false;

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }

  get isLoggedIn() {
    return this.loggedInStatus;
  }



  /*getUserDetails(username, password) {
    return this.http.post<myData>('/login', {
      username,
      password
    })
  }*/


  registerUser(user, callback) {
    this.http.post(this.apiUrl + 'users/signup', user,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
      }).subscribe(data => {
        callback(data);
      })
  }

  loginUser(user, callback) {
    this.http.post(this.apiUrl + 'users/login', user,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
      }).subscribe(data => {
        callback(data);
      })
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token)
    //local storage only store string
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  updateRide(ride, callback) {
    this.http.put(this.apiUrl + 'rides/update', ride,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
      }).subscribe(data => {
        callback(data);
      })
  }

  addRide(ride, callback) {
    this.http.post(this.apiUrl + 'rides/publish', ride,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
      }).subscribe(data => {
        callback(data);
      })
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

}

