import {Component, OnInit} from '@angular/core';
import {LoginModel} from '../../models/LoginModel';
import {AuthService} from '../../services/auth.service';
import {API_Response} from '../../interfaces/API_Response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser: LoginModel = new LoginModel();

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
  }


  logUser(user: LoginModel) {
    console.log(user);
    this.auth.logUser(user).subscribe((data: API_Response) => {
      console.log(data.msg);
      localStorage.setItem('token', `${data.msg}`);
    });
  }
}
