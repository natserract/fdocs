import { NgModule, ModuleWithProviders } from '@angular/core';
import { ButtonDirective } from './button.directive';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ButtonDirective,
        ButtonComponent
    ],
    exports: [
        ButtonDirective,
        ButtonComponent
    ]
})

export class ButtonsModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: ButtonsModule, providers: [] };
      }
}
