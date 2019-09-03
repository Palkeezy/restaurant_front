import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isTokenPresent: any;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.getToken();
    if (this.isTokenPresent) {
      this.router.navigate(['restaurants']);
    }
  }

  getToken() {
    this.isTokenPresent = !!localStorage.getItem('token');
  }
}
