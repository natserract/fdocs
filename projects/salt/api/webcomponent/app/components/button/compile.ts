
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ButtonModule } from './button.module';

enableProdMode();

platformBrowserDynamic().bootstrapModule(ButtonModule)
  .catch(err => console.error(err));
