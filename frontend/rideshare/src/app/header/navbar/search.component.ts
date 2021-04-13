import { Component, OnInit } from '@angular/core';
import { RideService } from '../../services/ride.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
    `
      .example-items-col{
        margin: auto;
      }
      .elem{
        margin: 15px;
      }
    `
  ]
})
export class SearchComponent implements OnInit {
  searchValue = {
    from: "",
    to: "",
    rideDate: ""
  }
  constructor(private rideService: RideService) { }

  ngOnInit(): void {
  }

  searchRides() {
    console.log(this.searchValue);
    console.log("searching items");
    this.rideService.searchRide(this.searchValue);
  }
  fromCityEvent($event) {
    this.searchValue.from = $event;
  }
  toCityEvent($event) {
    this.searchValue.to = $event;
  }
  rideDateChangeEvent($event) {
    this.searchValue.rideDate = $event;
  }
}
