import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {
  orderNumber: string;

  constructor(private activatedRoute: ActivatedRoute) {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.orderNumber = "OFED00000" + id
   }

  ngOnInit() {
  }

}
