import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RestaurantsModel } from '../model/restaurants-model';
import { RestaurantsService } from '../service/restaurants.service';
import { RestaurantsMenuModel } from '../model/restaurants-menu-model';
import { OrderCacheService } from '../service/order-cache.service';
import { FoodOrderModel } from '../model/food-order-model';
import { LoginCacheService } from '../service/login-cache.service';
import { OrderDetailModel } from '../model/order-detail-model';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  restaurant : RestaurantsModel;
  amount: number = 0;
  itemSubtotal: number = 0;
  deliveryFee: number = 0;
  totalPrice: number = 0;
  orderListMap : Map<number, number> = new Map<number, number>();
  orderListMenu: {id: number, quantity:number, itemName:string, price:number}[] = [];
  constructor(private restaurantsService: RestaurantsService, private activatedRoute: ActivatedRoute,
    private router: Router, private orderCacheService: OrderCacheService,
    private loginCacheService: LoginCacheService) {
   }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.restaurantsService.getRestaurant(id).subscribe(
      response => {
        this.restaurant = response;
        console.log(this.restaurant);
      }
    );
  }

  addToOrder(menu: RestaurantsMenuModel){
    let isPresent: boolean = false;
    this.orderListMenu.forEach(data => {
      if(data.id === menu.id){
        data.quantity = ++data.quantity;
        data.price = menu.price * data.quantity;
        isPresent = true;
      }
    });
    if(!isPresent){
      this.orderListMenu.push({'id': menu.id, 'quantity': 1, 'itemName': menu.name, 'price': menu.price});
    }
    this.itemSubtotal = 0;
    this.orderListMenu.forEach(data => {
      this.itemSubtotal = this.itemSubtotal + data.price;
    });

    if(this.itemSubtotal >= 300){
      this.deliveryFee = 0;
    } else {
      this.deliveryFee = 30;
    }

    this.totalPrice = this.itemSubtotal + this.deliveryFee;
  }

  placeOrder(){
    let foodOrderModel = new FoodOrderModel();
    foodOrderModel.totalPrice = this.totalPrice;
    let orderDetailModels : OrderDetailModel[] = []; 
    this.restaurant.restaurantMenus.forEach(data => {
      this.orderListMenu.forEach(menuItem =>{
        if(menuItem.id === data.id){
          let orderDetailModel : OrderDetailModel = new OrderDetailModel();
          orderDetailModel.restaurantMenus = data;
          orderDetailModel.menuItemQuantity = menuItem.quantity;
          orderDetailModel.totalPrice = menuItem.price;
          orderDetailModels.push(orderDetailModel);
        }
      });
    });
    foodOrderModel.orderDetail = orderDetailModels;
    this.orderCacheService.setFoodOrderModel(foodOrderModel);
    this.router.navigate(['makePayment']);
  }
}
