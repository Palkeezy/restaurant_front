import { Component, OnInit } from '@angular/core';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  isTokenPresent: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isTokenPresent = !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.isTokenPresent = false;
    this.router.navigate(['auth/login']);
  }
}
