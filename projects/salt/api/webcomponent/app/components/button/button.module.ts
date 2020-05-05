import { NgModule } from '@angular/core';
import { DoBootstrap, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';

import { RootElementModule } from '../root.module';
// Import all components
import { ButtonComponent } from '../..';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  entryComponents: [
    ButtonComponent
  ],
})
export class ButtonModule extends RootElementModule {
  constructor(
    injector: Injector
   ){
    super(injector, ButtonComponent, 'button');
   }
}
