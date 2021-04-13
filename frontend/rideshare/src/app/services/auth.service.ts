import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {readJSON} from "@nebular/theme/schematics/util";

interface myData {
  success: boolean,
  message: string
}

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  apiUrl= 'http://localhost:3000/users/';

  private loggedInStatus = false

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value
  }

  get isLoggedIn() {
    return this.loggedInStatus
  }

  getUserDetails(username, password) {
    return this.http.post<myData>('/login', {
      username,
      password
    })
  }


  registerUser(user, callback) {
    this.http.post(this.apiUrl + 'signup', user,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
      }).subscribe(data => {
      callback(data);
    })
}
}

