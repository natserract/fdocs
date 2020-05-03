import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class ButtonDirective implements ControlValueAccessor, OnInit {
    btnCheckboxTrue: boolean;
    btnCheckboxFalse: boolean;
    state: boolean;
    protected value: any;
    protected isDisable: boolean;
    onClick(): void;
    ngOnInit(): void;
    protected getTrueVal(): boolean;
    protected getFalseVal(): boolean;
    toggle(state: boolean): void;
    writeValue(value: any): void;
    setDisabledState(): void;
    registerOnChange(fn: () => {}): void;
    registerOnTouched(fn: () => {}): void;
    static ɵfac: i0.ɵɵFactoryDef<ButtonDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ButtonDirective, "[buttonCheckbox]", never, { "btnCheckboxTrue": "btnCheckboxTrue"; "btnCheckboxFalse": "btnCheckboxFalse"; }, {}, never>;
}
