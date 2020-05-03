import { NgModule, ModuleWithProviders } from '@angular/core';
import { ButtonComponent } from './components/buttons/button.component';
import { ButtonDirective } from './components/buttons/button.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ButtonComponent,
    ButtonDirective
  ],
  exports: [
    ButtonComponent,
    ButtonDirective
  ]
})
export class SaltModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SaltModule,
      providers: []
    };
  }
 }
