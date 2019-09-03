import {Component, OnInit} from '@angular/core';
import {RestaurantsService} from '../../services/restaurants.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
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
