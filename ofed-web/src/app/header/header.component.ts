import { Component, OnInit } from '@angular/core';
import { UserModel } from '../model/user-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedIn: boolean = false;
  userModel: UserModel;
  constructor() { }

  ngOnInit() {
  }

  loginStatus(userModel: UserModel){
    if(userModel && userModel.email != null){
      this.userModel = userModel;
      this.loggedIn = true;
    }
  }

  signOut(){
    this.loggedIn = false;
  }
}
