import { Directive, OnInit, ViewContainerRef } from '@angular/core';

import { ComponentLoaderBaseService } from '../providers/component-loader/component-loader.service';

@Directive({
  selector: '[footerDynamicComponent]',
})
export class FooterDynamicDirective implements OnInit {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentLoaderService: ComponentLoaderBaseService
  ) {}

  ngOnInit(): void {
    this.componentLoaderService.loadFooterComponent(this.viewContainerRef);
  }
}
