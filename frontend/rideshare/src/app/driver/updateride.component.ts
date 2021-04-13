import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-updateride',
  templateUrl: './updateride.component.html',
  styles: ['button{margin-top:15px}']
})
export class UpdaterideComponent implements OnInit {
  updateRideForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.updateRideForm = formBuilder.group({
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

}
