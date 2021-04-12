import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService, 
    private router: Router) { 
  }

  ngOnInit(): void {
  }
  login(event) {
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#email').value
    const password = target.querySelector('#password').value

    this.Auth.getUserDetails(username, password).subscribe(data => {
      if(data.success) {
        this.router.navigate(['driver/rides'])
        this.Auth.setLoggedIn(true)
      } else {
        window.alert(data.message)
      }
    })
    console.log(username, password)
  }
 
}
