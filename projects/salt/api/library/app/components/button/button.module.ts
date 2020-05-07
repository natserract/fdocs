import { NgModule } from '@angular/core';
import { Injector } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootElementModule } from '../../root.module';
import { ButtonComponent,  SaltModule } from '../..';

@NgModule({
  imports: [SaltModule],
  entryComponents: [ButtonComponent],
})
export class ButtonElementModule extends RootElementModule {
  constructor(injector: Injector) {
      super(injector, ButtonComponent, 'button');
  }
}
