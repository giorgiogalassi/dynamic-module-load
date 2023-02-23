import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HukRoutingModule } from './huk-routing.module';
import { HukService } from './providers/huk.service';

@NgModule({
  imports: [CommonModule, HukRoutingModule],
  declarations: [FooterComponent, HeaderComponent],
  providers: [HukService],
})
export class HukModule {
  constructor() {
    console.log('--- HukModule ---');
  }
}
