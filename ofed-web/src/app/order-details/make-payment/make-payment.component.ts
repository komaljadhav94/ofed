import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css']
})
export class MakePaymentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  makePayment(){
    this.router.navigate(['orderSuccess']);
  }
}
