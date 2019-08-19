import {Component, Input, OnInit} from '@angular/core';
import {RestaurantsService} from '../services/restaurants.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  restaurants;

  constructor(public restaurant: RestaurantsService) {
  }

  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants() {
    this.restaurant.getRestaurants().subscribe((res) => {
      this.restaurants = res.msg;
    });
  }
}
