import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestaurantsModel } from '../model/restaurants-model';
import { constants} from '../util/constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { UserModel } from '../model/user-model';

@Injectable({
  providedIn: 'root'
})
export class LoginCacheService {

  userModel: UserModel;
  
  getUserModel(){
    return this.userModel;
  }

  setUserModel(userModel: UserModel){
    this.userModel = userModel;
  }

  constructor(private httpClient: HttpClient) { }

  registerUser(userModel: UserModel){
    return this.httpClient.post<UserModel>(constants.API_ENDPOINT + 
      '/api/user/register', userModel);
  }
}
