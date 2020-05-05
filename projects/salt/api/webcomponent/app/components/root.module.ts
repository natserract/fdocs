import {  Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

export class RootElementModule {
    constructor(injector: Injector, component: InstanceType<any>, name: string) {
        const ngElement = createCustomElement(component, {
            injector,
        });
        customElements.define(`salt-${name}`, ngElement);
    }
}

