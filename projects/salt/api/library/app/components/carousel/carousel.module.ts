import { NgModule } from '@angular/core';
import { Injector } from '@angular/core';

import { RootElementModule } from '../../root.module';
import { CarouselComponent, SaltModule } from '../..';

@NgModule({
  imports: [SaltModule],
  entryComponents: [CarouselComponent],
})
export class CarouselElementModule extends RootElementModule {
  constructor(
    injector: Injector
   ){
    super(injector, CarouselComponent, 'carousel');
   }
}

