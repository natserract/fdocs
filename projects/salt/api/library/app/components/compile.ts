import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ButtonElementModule } from './button/button.module';
import { SliderElementModule } from './slider/slider.module';

enableProdMode();

platformBrowserDynamic()
  .bootstrapModule(ButtonElementModule)
    .catch(err => console.error(err));

platformBrowserDynamic()
    .bootstrapModule(SliderElementModule)
      .catch(err => console.error(err));
