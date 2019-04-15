import { Injectable } from '@angular/core';
import { FoodOrderModel } from '../model/food-order-model';
import { HttpClient } from '@angular/common/http';
import { constants } from '../util/constants';

@Injectable()
export class OrderCacheService {

  foodOrderModel: FoodOrderModel;

  getFoodOrderModel(){
    return this.foodOrderModel;
  } 

  setFoodOrderModel(foodOrderModel: FoodOrderModel){
    this.foodOrderModel = foodOrderModel;
  }

  constructor(private httpClient: HttpClient) {
   }

   placeOrder(foodOrderModel: FoodOrderModel){
    return this.httpClient.post<FoodOrderModel>(constants.API_ENDPOINT + 
      '/api/order/placeOrder', foodOrderModel);
   }
}
