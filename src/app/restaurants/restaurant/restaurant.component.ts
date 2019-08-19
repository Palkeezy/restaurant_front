import {Component, Input, OnInit} from '@angular/core';
import {RestaurantsService} from '../../services/restaurants.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  @Input() restaurantInput;


  constructor() {
  }

  ngOnInit() {

  }
}
