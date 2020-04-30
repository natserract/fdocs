import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingModule } from './esm-routing.module';
import { GetStartedComponent } from './get-started/get-started.component';

@NgModule({
  declarations: [
    GetStartedComponent,
  ],
  imports: [
    CommonModule,
    RoutingModule
  ]
})
export class EsmModule { }
