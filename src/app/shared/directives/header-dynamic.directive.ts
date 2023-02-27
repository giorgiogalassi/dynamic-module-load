import {Directive, Input, OnInit, ViewContainerRef} from '@angular/core';

import {ComponentLoaderBaseService} from '@services';

@Directive({
  selector: '[headerDynamicComponent]',
})
export class HeaderDynamicDirective implements OnInit {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentLoaderService: ComponentLoaderBaseService
  ) {}

  ngOnInit(): void {
    this.componentLoaderService.loadHeaderComponent(this.viewContainerRef);
  }
}
