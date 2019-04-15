import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserModel } from '../model/user-model';
import { LoginCacheService } from '../service/login-cache.service';


@Component({
  selector: 'app-login-model',
  templateUrl: './login-model.component.html',
  styleUrls: ['./login-model.component.scss']
})
export class LoginModelComponent implements OnInit {

  @Output("loginStatus")
  loginStatus = new EventEmitter<boolean>();

  userModel: UserModel = new UserModel();

  constructor(private loginCacheService: LoginCacheService) { }

  ngOnInit() {
  }

  signIn(){
    this.loginStatus.emit(true);

  }

  signUp(){
    this.loginStatus.emit(true);
    this.loginCacheService.registerUser(this.userModel).subscribe(
      response => {
        this.userModel = response;
      }
    );
  }
}
