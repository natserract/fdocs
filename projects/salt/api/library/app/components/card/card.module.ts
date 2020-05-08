import { NgModule } from '@angular/core';
import { Injector } from '@angular/core';

import { RootElementModule } from '../../root.module';
import { CardComponent, SaltModule } from '../..';

@NgModule({
  imports: [SaltModule],
  entryComponents: [CardComponent],
})
export class CardElementModule extends RootElementModule {
  constructor(
    injector: Injector
   ){
    super(injector, CardComponent, 'card');
   }
}

