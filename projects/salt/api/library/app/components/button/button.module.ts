import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Injector } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootElementModule } from '../../root.module';
import { ButtonComponent,ButtonModule } from '../..';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule, ButtonModule],
  entryComponents: [ButtonComponent],
})
export class ButtonElementModule extends RootElementModule {
  constructor(injector: Injector) {
      super(injector, ButtonComponent, 'button');
  }
}
