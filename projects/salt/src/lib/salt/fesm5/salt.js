import { ɵɵdefineComponent, ɵɵprojectionDef, ɵɵelementStart, ɵɵprojection, ɵɵelementEnd, ɵsetClassMetadata, Component, ɵɵdefineDirective, ɵɵlistener, ɵɵclassProp, Directive, Input, HostBinding, HostListener, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var _c0 = ["*"];
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
    }
    ButtonComponent.prototype.ngOnInit = function () {
    };
    ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
    ButtonComponent.ɵcmp = ɵɵdefineComponent({ type: ButtonComponent, selectors: [["salt-button"]], ngContentSelectors: _c0, decls: 2, vars: 0, template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "button");
            ɵɵprojection(1);
            ɵɵelementEnd();
        } }, encapsulation: 2 });
    return ButtonComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ButtonComponent, [{
        type: Component,
        args: [{
                selector: 'salt-button',
                template: "\n        <button>\n            <ng-content></ng-content>\n        </button>\n    ",
            }]
    }], function () { return []; }, null); })();

var ButtonDirective = /** @class */ (function () {
    function ButtonDirective() {
        this.btnCheckboxTrue = true;
        this.btnCheckboxFalse = false;
        this.state = false;
    }
    ButtonDirective.prototype.onClick = function () {
        if (this.isDisable) {
            return;
        }
        this.toggle(!this.state);
    };
    // Set when init call the toggle function
    ButtonDirective.prototype.ngOnInit = function () {
        this.toggle(this.getTrueVal === this.value);
    };
    // Get value and validation value
    ButtonDirective.prototype.getTrueVal = function () {
        return typeof this.btnCheckboxTrue !== 'undefined'
            ? this.btnCheckboxTrue : true;
    };
    ButtonDirective.prototype.getFalseVal = function () {
        return typeof this.btnCheckboxFalse !== 'undefined'
            ? this.btnCheckboxFalse : false;
    };
    // Function for toggle value
    ButtonDirective.prototype.toggle = function (state) {
        this.state = state;
        this.value = this.state ? this.getTrueVal : this.getFalseVal;
    };
    ButtonDirective.prototype.writeValue = function (value) {
        this.state = this.getTrueVal === value;
        this.value = value ? this.getTrueVal : this.getFalseVal;
    };
    ButtonDirective.prototype.setDisabledState = function () { };
    ButtonDirective.prototype.registerOnChange = function (fn) { };
    ButtonDirective.prototype.registerOnTouched = function (fn) { };
    ButtonDirective.ɵfac = function ButtonDirective_Factory(t) { return new (t || ButtonDirective)(); };
    ButtonDirective.ɵdir = ɵɵdefineDirective({ type: ButtonDirective, selectors: [["", "buttonCheckbox", ""]], hostVars: 2, hostBindings: function ButtonDirective_HostBindings(rf, ctx) { if (rf & 1) {
            ɵɵlistener("click", function ButtonDirective_click_HostBindingHandler() { return ctx.onClick(); });
        } if (rf & 2) {
            ɵɵclassProp("active", ctx.state);
        } }, inputs: { btnCheckboxTrue: "btnCheckboxTrue", btnCheckboxFalse: "btnCheckboxFalse" } });
    return ButtonDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ButtonDirective, [{
        type: Directive,
        args: [{
                selector: '[buttonCheckbox]',
            }]
    }], null, { btnCheckboxTrue: [{
            type: Input
        }], btnCheckboxFalse: [{
            type: Input
        }], state: [{
            type: HostBinding,
            args: ['class.active']
        }], onClick: [{
            type: HostListener,
            args: ['click']
        }] }); })();

var SaltModule = /** @class */ (function () {
    function SaltModule() {
    }
    SaltModule.forRoot = function () {
        return {
            ngModule: SaltModule,
            providers: []
        };
    };
    SaltModule.ɵmod = ɵɵdefineNgModule({ type: SaltModule });
    SaltModule.ɵinj = ɵɵdefineInjector({ factory: function SaltModule_Factory(t) { return new (t || SaltModule)(); }, imports: [[
                CommonModule
            ]] });
    return SaltModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SaltModule, { declarations: [ButtonComponent,
        ButtonDirective], imports: [CommonModule], exports: [ButtonComponent,
        ButtonDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SaltModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    ButtonComponent,
                    ButtonDirective
                ],
                exports: [
                    ButtonComponent,
                    ButtonDirective
                ]
            }]
    }], null, null); })();

function alert() {
    return "alert";
}

var alert$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
});

function hello_world() {
    return alert$1();
}
;

/*
 * Public API Surface of salt
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, ButtonDirective, SaltModule };
//# sourceMappingURL=salt.js.map
