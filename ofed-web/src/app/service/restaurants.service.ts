import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestaurantsModel } from '../model/restaurants-model';
import { constants} from '../util/constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private httpClient: HttpClient) { }

  getRestaurants(): Observable<RestaurantsModel[]> {
     return this.httpClient.get<RestaurantsModel[]>(constants.API_ENDPOINT + 
      '/api/restaurant/fetchAllRestaurants');

  }

  getRestaurant(id: string): Observable<RestaurantsModel> {
    return this.httpClient.post<RestaurantsModel>(constants.API_ENDPOINT + 
     '/api/restaurant/fetchAllRestaurant', id);
 }
}
