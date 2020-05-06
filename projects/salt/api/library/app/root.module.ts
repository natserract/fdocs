import {  Injector, DoBootstrap, ApplicationRef } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';

export abstract class RootElementModule {
    constructor(
        injector: Injector, component: InstanceType<any>, name: string
      ){
        const strategyFactory = new ElementZoneStrategyFactory(component, injector);
        const ngElement = createCustomElement(
            component,
          { injector, strategyFactory }
        );
        customElements.define(`salt-${name}`, ngElement);
      }
      ngDoBootstrap(){}
}

