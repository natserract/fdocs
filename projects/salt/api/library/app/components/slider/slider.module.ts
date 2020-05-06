import { NgModule } from '@angular/core';
import { DoBootstrap, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';
import { SliderComponent } from '../..';

@NgModule({
  declarations: [
    SliderComponent
  ],
  entryComponents: [
    SliderComponent
  ]
})
export class SliderModule implements DoBootstrap {
  constructor(
    injector: Injector
  ){
    const strategyFactory = new ElementZoneStrategyFactory(SliderComponent, injector);
    const webComponent = createCustomElement(
      SliderComponent,
      { injector, strategyFactory }
    );

    customElements.define('salt-slider', webComponent);
  }

  ngDoBootstrap(){}
}
