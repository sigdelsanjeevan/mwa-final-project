import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-rideform',
  templateUrl: './rideform.component.html',
  styleUrls: ['./rideform.component.css']
})
export class RideformComponent implements OnInit {
  addRideForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private auth: AuthService) {
    this.addRideForm = formBuilder.group({
      'from': ['', [Validators.required]],
      'to': ['', [Validators.required]],
      'seatsNum': ['', [Validators.required]],
      'date': ['', [Validators.required]],
      'carmodel': ['', [Validators.required]],
      'year': ['', [Validators.required]],
      'color': ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  onAddRide() {
    const ride = {
      from: this.addRideForm.value.from,
      to: this.addRideForm.value.to,
      seatsNum: this.addRideForm.value.seatsNum,
      date: this.addRideForm.value.date,
      carmodel: this.addRideForm.value.carmodel,
      year: this.addRideForm.value.year,
      color: this.addRideForm.value.color
    };

    //add a ride
    this.auth.addRide(ride, (data) => {
      if (data.success) {
        this.router.navigateByUrl("/driver")
      } else {
        alert("Could not add. Please try again!");
        this.router.navigateByUrl("/driver");
      }
    })
  }

}
