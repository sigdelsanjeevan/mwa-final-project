import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rideform',
  templateUrl: './rideform.component.html',
  styleUrls: ['./rideform.component.css']
})
export class RideformComponent implements OnInit {
  addRideForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.addRideForm = formBuilder.group({
      'from': ['', [Validators.required]],
      'to': ['', [Validators.required]],
      'seatsNum': ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

}
