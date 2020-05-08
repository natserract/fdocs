import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './app/components/slider/slider.component';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './app/components/card/card.component';
import { ButtonComponent } from './app/components/button/button.component';
import { CarouselComponent } from './app/components/carousel/carousel.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  declarations: [
    SliderComponent,
    CardComponent,
    ButtonComponent,
    CarouselComponent,
  ],
  exports: [
    SliderComponent,
    CardComponent,
    ButtonComponent,
    CarouselComponent,
  ]
})
export class SaltModule {
  constructor(){}
}
