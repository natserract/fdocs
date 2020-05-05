import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Injector } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootElementModule } from '../../root.module';
import { ButtonComponent } from '../..';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  declarations: [
    ButtonComponent
  ],
  entryComponents: [
    ButtonComponent
  ],
  bootstrap: [ButtonComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ButtonModule extends RootElementModule {
  constructor(
    injector: Injector
   ){
    super(injector, ButtonComponent, 'button');
   }
}
