import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { RestaurantsModel } from '../model/restaurants-model';
import { constants} from '../util/constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  private restaurantsSearchSubject = new BehaviorSubject("default");
  restaurantsSearch = this.restaurantsSearchSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  triggerSearch(restaurant: string){
    this.restaurantsSearchSubject.next(restaurant);
  }

  getRestaurants(): Observable<RestaurantsModel[]> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
                               .set('access-control-allow-origin','*');
    return this.httpClient.get<RestaurantsModel[]>(constants.API_ENDPOINT + 
      '/api/restaurant/fetchAllRestaurants');
  }

  getRestaurant(id: string): Observable<RestaurantsModel> {
    return this.httpClient.post<RestaurantsModel>(constants.API_ENDPOINT + 
     '/api/restaurant/fetchRestaurant', id);
 }

 getRestaurantByName(name: string): Observable<RestaurantsModel[]> {
  return this.httpClient.post<RestaurantsModel[]>(constants.API_ENDPOINT + 
   '/api/restaurant/fetchAllRestaurantsByName', name);
}
}
