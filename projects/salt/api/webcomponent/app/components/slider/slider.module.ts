import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Injector } from '@angular/core';

import { RootElementModule } from '../../root.module';
import { SliderComponent } from '../..';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule
  ],
  declarations: [
    SliderComponent
  ],
  entryComponents: [
    SliderComponent
  ],
  bootstrap: [SliderComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SliderModule extends RootElementModule {
  constructor(
    injector: Injector
   ){
    super(injector, SliderComponent, 'slider');
   }
}
