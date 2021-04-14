import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driverpage',
  templateUrl: './driverpage.component.html',
  styles: ['button{margin:10px}']
})
export class DriverpageComponent implements OnInit {
  user: any;
  fullname: string;
  rides = [{
    from: "chicago", to: "fairfield", date: "12/12/2020", car: {
      model: "Toyota Prius",
      year: "2010",
      color: "White"
    }
  }, {
    from: "chicago", to: "fairfield", date: "12/12/2020", car: {
      model: "Toyota Prius",
      year: "2010",
      color: "White"
    }
  }, {
    from: "chicago", to: "fairfield", date: "12/12/2020", car: {
      model: "Toyota Prius",
      year: "2010",
      color: "White"
    }
  }, {
    from: "chicago", to: "fairfield", date: "12/12/2020", car: {
      model: "Toyota Prius",
      year: "2010",
      color: "White"
    }
  }, {
    from: "chicago", to: "fairfield", date: "12/12/2020", car: {
      model: "Toyota Prius",
      year: "2010",
      color: "White"
    }
  }, {
    from: "chicago", to: "fairfield", date: "12/12/2020", car: {
      model: "Toyota Prius",
      year: "2010",
      color: "White"
    }
  },];
  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
  }

}
