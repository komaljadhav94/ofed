import { UserModel } from "./user-model";

export class PaymentModel {

    id : number;
	
	cardNumber: number;
	
	ccv: number;

	expMonth: number;

	expYear: number;

	nameOnCard: string;

	address1: string;

	address2: string;

	state: string;

	city: string;

    zipCode: string;
    
    user: UserModel;
}
