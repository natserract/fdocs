
import {
    Component, Renderer2, Input, ElementRef, OnInit
} from '@angular/core';

@Component({
    selector: 'salt-button',
    template: `
        <button>
            <ng-content></ng-content>
        </button>
    `,
})

export class ButtonComponent implements OnInit{
    constructor(
    ){}

    ngOnInit() {

    }
}
