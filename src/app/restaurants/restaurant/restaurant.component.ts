import {Component, OnInit} from '@angular/core';
import {RestaurantsService} from '../../services/restaurants.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  constructor(public restaurant: RestaurantsService) {
  }

  ngOnInit() {
    this.restaurant.getRestaurants().subscribe((res) => {
    });
  }

}
