
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SliderElementModule } from './slider.module';

enableProdMode();

platformBrowserDynamic().bootstrapModule(SliderElementModule)
  .catch(err => console.error(err));
