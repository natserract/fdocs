import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CarouselElementModule } from './carousel.module';

enableProdMode();

platformBrowserDynamic().bootstrapModule(CarouselElementModule)
.catch(err => console.error(err));
