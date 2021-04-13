import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

import { Router } from '@angular/router';

interface Car {
  _id: string;
  model: string;
  year: Date;
  color: string;
}

interface Ride {
  _id: number;
  from:string;
  to:string;
  createdOn: Date;
  seatsNumber: number;
  car: Car;
}

@Injectable({
  providedIn: 'root'
})
export class RideService {
  private rideSearchUrl = "http://localhost:3000/rides/search";
  constructor(private http: HttpClient, private router: Router) { }

  private searchResult = [];
  getSearchResult() {
    if (!this.searchResult){
      return [];
    }
    return this.searchResult;
  }

  fetchSearchResult(from, to, rideDate) {
    this.http.post<Ride[]>(this.rideSearchUrl, { from, to, rideDate })
      .subscribe(
        (rides) => {
          rides.forEach((val)=>{this.searchResult.push(val)})
        },
        response => { console.log("Ride search error", response); },
        () => { console.log("Get ride search result."); }
      );
  }

  searchRide(searchData) {
    const { from, to, rideDate } = searchData;
    this.searchResult = [];
    this.fetchSearchResult(from, to, rideDate);
    console.log(this.searchResult)
    // this.searchResult = res;
    this.router.navigateByUrl('/rides')
  }
}
