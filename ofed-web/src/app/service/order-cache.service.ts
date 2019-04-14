import { Injectable } from '@angular/core';
import { FoodOrderModel } from '../model/food-order-model';

@Injectable()
export class OrderCacheService {

  foodOrderModel: FoodOrderModel;

  getFoodOrderModel(){
    return this.foodOrderModel;
  } 

  setFoodOrderModel(foodOrderModel: FoodOrderModel){
    this.foodOrderModel = foodOrderModel;
  }

  constructor() { }
}
