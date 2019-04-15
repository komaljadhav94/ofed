import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderCacheService } from 'src/app/service/order-cache.service';
import { PaymentModel } from 'src/app/model/payment-model';
import { LoginCacheService } from 'src/app/service/login-cache.service';
import { UserModel } from 'src/app/model/user-model';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css']
})
export class MakePaymentComponent implements OnInit {

  paymentModel: PaymentModel = new PaymentModel();
  userModel: UserModel;

  constructor(private router: Router, private orderCacheService: OrderCacheService,
    private loginCacheService: LoginCacheService) {
    console.log(this.orderCacheService.foodOrderModel);
    this.userModel = this.loginCacheService.getUserModel();
    if(this.userModel && this.userModel.email != null){
      this.paymentModel.user = this.userModel;
      this.orderCacheService.foodOrderModel.user = this.userModel;
    } else{
      this.loginCacheService.fetchDefaultUser().subscribe(
        response => {
          this.userModel = response;
          this.paymentModel.user = this.userModel;
          this.orderCacheService.foodOrderModel.user = this.userModel;
        }
      );
    }

   }

  ngOnInit() {
  }

  makePayment(){
    this.orderCacheService.foodOrderModel.payment = this.paymentModel;
    this.orderCacheService.foodOrderModel.address1 = this.paymentModel.address1;
    this.orderCacheService.foodOrderModel.address2 = this.paymentModel.address2;
    this.orderCacheService.foodOrderModel.city = this.paymentModel.city;
    this.orderCacheService.foodOrderModel.state = this.paymentModel.state;
    this.orderCacheService.foodOrderModel.zipCode = this.paymentModel.zipCode;

    console.log(this.orderCacheService.foodOrderModel);
    this.orderCacheService.placeOrder(this.orderCacheService.foodOrderModel).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['orderSuccess/' + response.id]);
      }
    );
  }
}
