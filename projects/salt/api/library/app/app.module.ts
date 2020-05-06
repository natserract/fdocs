import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

// Import all modules here
import { ButtonElementModule } from './components/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ButtonElementModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
