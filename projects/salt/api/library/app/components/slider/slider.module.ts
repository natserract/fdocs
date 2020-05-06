import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Injector } from '@angular/core';

import { RootElementModule } from '../../root.module';
import { SliderComponent,SliderModule } from '../..';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule, SliderModule],
  entryComponents: [SliderComponent],
})
export class SliderElementModule extends RootElementModule {
  constructor(
    injector: Injector
   ){
    super(injector, SliderComponent, 'slider');
   }
}
