
import {
    Component,  Renderer2, Input, ElementRef, OnInit
} from '@angular/core';

@Component({
    selector: 'ngx-button',
    template: `
        <button>
            <ng-content></ng-content>
        </button>
    `,
})

export class ButtonComponent implements OnInit{
    constructor(
        private renderer: Renderer2,
        private el: ElementRef
    ){}

    @Input() value: string;

    ngOnInit() {
        const spanText = this.renderer.createText(this.value);

    }
}
