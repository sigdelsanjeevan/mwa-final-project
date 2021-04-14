import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"

import { Router } from '@angular/router';

interface Car {
  _id: string;
  model: string;
  year: Date;
  color: string;
}

interface Ride {
  _id: number;
  from: string;
  to: string;
  createdOn: Date;
  seatsNumber: number;
  car: Car;
}

@Injectable({
  providedIn: 'root'
})
export class RideService {
  private rideSearchUrl = "http://localhost:3000/";
  constructor(private http: HttpClient, private router: Router) { }

  private searchResult = [];
  getSearchResult() {
    if (!this.searchResult) {
      return [];
    }
    return this.searchResult;
  }

  fetchSearchResult(from, to, rideDate) {
    this.http.post<Ride[]>(this.rideSearchUrl + 'rides/search', { from, to, rideDate })
      .subscribe(
        (rides) => {
          rides.forEach((val) => { this.searchResult.push(val) })
        },
        response => {console.log(this.searchResult); console.log("Ride search error", response); },
        () => { console.log("Get ride search result."); }
      );
  }
 searchRide(searchData) {
    const { from, to, rideDate } = searchData;
    this.searchResult = [];
    this.fetchSearchResult(from, to, rideDate);
    console.log(this.fetchSearchResult(from, to, rideDate))
    // this.searchResult = res;
    this.router.navigateByUrl('/rides')
  }

  searchRideByEmail(email, callback) {
    this.http.get(this.rideSearchUrl + 'driver/rides/' + email,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
      }).subscribe(data => {
        callback(data);
      })
  }
}


