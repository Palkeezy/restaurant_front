import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Hosts} from '../enums/hosts';
import {Observable} from 'rxjs';
import {API_Response} from '../interfaces/API_Response';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http: HttpClient) {
  }
  getRestaurants(): Observable<API_Response> {
    return this.http.get<API_Response>(`${Hosts.API_HOST}/restaurant`);
  }
}

