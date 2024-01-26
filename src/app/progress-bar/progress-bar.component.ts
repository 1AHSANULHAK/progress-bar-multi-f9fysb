import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent implements OnInit {
  @Input() calculationModel: { x1: any; x2: any; x3: any; x4: any; x5: any };

  x11;
  x22;
  x33;
  x44;
  x55;

  constructor() {}

  ngOnInit() {
    if (this.calculationModel) {
      this.x11 = this.calculationModel.x1;
      console.log(this.x11);

      this.x22 = this.calculationModel.x2;
      this.x33 = this.calculationModel.x3;
      this.x44 = this.calculationModel.x4;
      this.x55 = this.calculationModel.x5;
    } else {
      console.error('calculationModel is undefined or null.');
    }
  }
}
