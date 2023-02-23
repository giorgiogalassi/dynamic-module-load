import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DistributorBaseService } from '../../providers/distributor/distributor-base.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  constructor(private distributorService: DistributorBaseService) {}

  go(): void {
    this.distributorService.navigate();
  }
}
