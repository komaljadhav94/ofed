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

    this.restaurantsService.restaurantsSearch.subscribe(
      restaurant => {
        console.log('Service call for search');
        this.restaurantsService.getRestaurantByName(restaurant).subscribe(
          response => {
            this.restaurants = response;
          }
        );
      }
    );
   }
  
  ngOnInit() {
    
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
