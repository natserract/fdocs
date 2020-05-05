import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/buttons/button.component';
import { ButtonDirective } from './components/buttons/button.directive';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ButtonComponent,
    ButtonDirective,
    SliderComponent
  ],
  exports: [
    ButtonComponent,
    ButtonDirective,
    SliderComponent
  ]
})
export class SaltModule {
  constructor(){}
}
