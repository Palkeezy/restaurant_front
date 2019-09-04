import {Component, Input, OnInit} from '@angular/core';
import {RestaurantsService} from '../../../services/restaurants.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  restaurants;

  constructor(public restaurantService: RestaurantsService) {
  }

  ngOnInit() {
    this.getRestaurants();
  }
  getRestaurants() {
    this.restaurantService.getRestaurants().subscribe((res) => {
      this.restaurants = res.msg;
    });
  }

}
