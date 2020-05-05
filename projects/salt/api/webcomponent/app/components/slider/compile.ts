
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SliderModule } from './slider.module';

enableProdMode();

platformBrowserDynamic().bootstrapModule(SliderModule)
  .catch(err => console.error(err));
