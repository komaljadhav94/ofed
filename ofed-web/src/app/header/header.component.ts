import { Component, OnInit } from '@angular/core';
import { UserModel } from '../model/user-model';
import { RestaurantsService } from '../service/restaurants.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedIn: boolean = false;
  userModel: UserModel;
  search: string;
  constructor(private restaurantsService: RestaurantsService) { }

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

  searchRestaurants(){
    console.log('searching ...');
    this.restaurantsService.triggerSearch(this.search);
  }
}
