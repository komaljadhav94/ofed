import { RestaurantsMenuModel } from "./restaurants-menu-model";

export class RestaurantsModel {
    id: number;
    name: string;
    address1: string;
    address2: string;
    state: string;
    city: string;
    zipCode: string;
    description: string;
    restaurantMenus: RestaurantsMenuModel[];
}
