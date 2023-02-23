import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LvmRoutingModule } from './lvm-routing.module';
import { LvmService } from './providers/lvm.service';

@NgModule({
  imports: [CommonModule, LvmRoutingModule],
  declarations: [],
  providers: [LvmService],
})
export class LvmModule {
  constructor() {
    console.log('--- LvmModule ---');
  }
}
