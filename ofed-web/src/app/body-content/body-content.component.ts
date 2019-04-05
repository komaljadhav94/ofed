import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { RestaurantsService } from '../service/restaurants.service';
import { RestaurantsModel } from '../model/restaurants-model';
import {Router} from '@angular/router';
@Component({
  selector: 'app-body-content',
  templateUrl: './body-content.component.html',
  styleUrls: ['./body-content.component.css']
})
export class BodyContentComponent implements OnInit {
  restaurants : RestaurantsModel[];
  constructor(private restaurantsService: RestaurantsService, private router: Router) {
    this.restaurantsService.getRestaurants().subscribe(
      response => {
        this.restaurants = response;
      }
    );
   }
  
  ngOnInit() {
    
  }

  onLoginFormSubmit(userLoginForm: NgForm){
    console.log(userLoginForm);
  }

  onRegisterFormSubmit(userRegisterForm: NgForm){
    console.log(userRegisterForm);
  }

  userSettings = {}
	autoCompleteCallback1(selectedData:any) {
		//do any necessery stuff.
	}
  
  orderDetail(restaurant : RestaurantsModel){
    console.log(restaurant);
    this.router.navigate(['/order/' + restaurant.id]);
  }
}
