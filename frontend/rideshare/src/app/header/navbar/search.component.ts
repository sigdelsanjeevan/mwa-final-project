import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
