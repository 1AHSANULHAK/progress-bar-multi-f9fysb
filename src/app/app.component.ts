import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  availabilityModel;

  constructor() {}

  ngOnInit() {
    this.availabilityModel = {
      x1: 45,
      x2: 20,
      x3: 12,
      x4: 44,
      x5: 51,
    };
  }
}
