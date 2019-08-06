import {Component, OnInit} from '@angular/core';
import {RegisterModel} from '../../models/RegisterModel';
import {Roles} from '../../enums/roles';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  check: boolean;
  registerUser: RegisterModel = new RegisterModel();

  constructor() {
  }

  ngOnInit() {
  }

  test() {
    if (this.check) {
      this.registerUser.role = Roles.Restaurant;
    }
    console.log(this.registerUser);
  }

  change() {
    this.check = !this.check;
  }
}
