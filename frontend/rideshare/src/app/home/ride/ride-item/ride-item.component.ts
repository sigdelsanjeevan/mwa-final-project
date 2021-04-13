import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ride-item',
  templateUrl: './ride-item.component.html'
})
export class RideItemComponent implements OnInit {
  @Input() ride: any;
  constructor() { }

  ngOnInit(): void {
  }

}
