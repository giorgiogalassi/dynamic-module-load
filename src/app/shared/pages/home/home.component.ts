import { Component, OnInit } from '@angular/core';

import { DistributorBaseService } from '../../providers/distributor/distributor-base.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private distributorService: DistributorBaseService) {}

  ngOnInit(): void {
    console.info(
      `HomeComponent loaded by ${this.distributorService.getDistributorInfo()}`
    );
  }

  navigate(): void {
    this.distributorService.navigate();
  }
}
