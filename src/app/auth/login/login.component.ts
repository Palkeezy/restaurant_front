import {Component, OnInit, ViewChild} from '@angular/core';
import {LoginModel} from '../../models/LoginModel';
import {AuthService} from '../../services/auth.service';
import {API_Response} from '../../interfaces/API_Response';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUser: LoginModel = new LoginModel();
  constructor(private auth: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }


  logUser(user: LoginModel) {
    this.auth.logUser(user).subscribe((data: API_Response) => {
      localStorage.setItem('token', `${data.msg}`);
      console.log(data.msg);
    });
    this.router.navigate(['restaurants']);
  }
}
