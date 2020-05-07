import { NgModule } from '@angular/core';
import { Injector } from '@angular/core';

import { RootElementModule } from '../../root.module';
import { SliderComponent, SaltModule } from '../..';

@NgModule({
  imports: [SaltModule],
  entryComponents: [SliderComponent],
})
export class SliderElementModule extends RootElementModule {
  constructor(
    injector: Injector
   ){
    super(injector, SliderComponent, 'slider');
   }
}
