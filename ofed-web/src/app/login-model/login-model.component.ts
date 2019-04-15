import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { UserModel } from '../model/user-model';
import { LoginCacheService } from '../service/login-cache.service';


@Component({
  selector: 'app-login-model',
  templateUrl: './login-model.component.html',
  styleUrls: ['./login-model.component.scss']
})
export class LoginModelComponent implements OnInit {

  @Output("loggedInUser")
  loginStatus = new EventEmitter<UserModel>();
  @ViewChild('closeSignInModal') closeAddExpenseModal: ElementRef;
  userModel: UserModel = new UserModel();
  loginFailed: boolean = false;
  constructor(private loginCacheService: LoginCacheService) { }

  ngOnInit() {
  }

  signIn(){
    console.log(this.userModel);
    this.loginCacheService.loginUser(this.userModel).subscribe(
      response => {
        console.log(response);
        if(response != null && response.email === this.userModel.email){
          this.userModel = response;
          this.loginStatus.emit(this.userModel);
        } else{
          this.loginFailed = true;
          alert("User name or password is invalid, Please try again!");
        }
      }
    );
  }

  signUp(){
    this.loginCacheService.registerUser(this.userModel).subscribe(
      response => {
        this.userModel = response;
        this.loginStatus.emit(this.userModel);
      }
    );
  }
}
