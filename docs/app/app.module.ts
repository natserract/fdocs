import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

import { EsmModule } from './modules/esm.module';
import { SharedModule } from './shared/shared.module';

import {
  HighlightModule,
  HIGHLIGHT_OPTIONS,
  HighlightOptions
} from 'ngx-highlightjs';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'angular-app' }),
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    HighlightModule,
    EsmModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        lineNumbers: true
      } as HighlightOptions
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
