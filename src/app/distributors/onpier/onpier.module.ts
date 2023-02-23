import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { OnpierRoutingModule } from './onpier-routing.module';
import { OnpierService } from './providers/onpier.service';

@NgModule({
  imports: [CommonModule, OnpierRoutingModule],
  declarations: [FooterComponent, HeaderComponent],
  providers: [OnpierService],
})
export class OnpierModule {
  constructor() {
    console.log('--- OnpierModule ---');
  }
}
