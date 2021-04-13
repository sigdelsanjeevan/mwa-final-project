import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user;
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.user = this.auth.isLoggedIn;
  }

  logout() {

  }
}
