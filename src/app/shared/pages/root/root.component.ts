import { Component, OnInit } from '@angular/core';

import { DistributorBaseService } from '../../providers/distributor/distributor-base.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent implements OnInit {
  constructor(private distributorService: DistributorBaseService) {}

  ngOnInit(): void {
    this.distributorService.init();
  }

  navigate(): void {
    this.distributorService.navigate();
  }
}
