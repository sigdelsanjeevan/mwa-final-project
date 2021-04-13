import { Component, OnInit } from '@angular/core';
import { RideService } from '../../../services/ride.service';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html'
})
export class RidesComponent implements OnInit {

  allRides;
  constructor(private rideService: RideService ) { 
  }

  ngOnInit(): void {
    this.allRides = this.rideService.getSearchResult();
  }

}
