import {Component, OnInit} from '@angular/core';
import {RegisterModel} from '../../models/RegisterModel';
import {Roles} from '../../enums/roles';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  check: boolean;
  registerUser: RegisterModel = new RegisterModel();

  constructor(private auth: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  change() {
    this.check = !this.check;
  }

  regUser(registerUser: RegisterModel) {
    if (this.check) {
      registerUser.role = Roles.Restaurant;
    } else {
      registerUser.role = Roles.Client;
    }
    this.auth.regUser(registerUser).subscribe((data) => {
    });

    this.router.navigate(['login']);
  }
}
