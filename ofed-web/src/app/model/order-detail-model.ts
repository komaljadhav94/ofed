import { RestaurantsMenuModel } from "./restaurants-menu-model";
import { FoodOrderModel } from "./food-order-model";

export class OrderDetailModel {
    id: number;
    restaurantMenus: RestaurantsMenuModel;
    totalPrice: number;
    menuItemQuantity: number;
}
