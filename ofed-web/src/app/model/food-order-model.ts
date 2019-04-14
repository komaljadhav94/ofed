import { UserModel } from "./user-model";
import { PaymentModel } from "./payment-model";
import { OrderDetailModel } from "./order-detail-model";

export class FoodOrderModel {
    id: number;
    address1: string;
    address2: string;
    state: string;
    city: string;
    zipCode: string;
    totalPrice: number;

    user: UserModel;
    payment: PaymentModel;

    orderDetails: OrderDetailModel[];
 }
