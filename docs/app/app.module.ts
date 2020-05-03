import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SaltModule } from 'salt';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

import { EsmModule } from './modules/esm.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'angular-app' }),
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    EsmModule,
    SharedModule,
    SaltModule.forRoot()
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
