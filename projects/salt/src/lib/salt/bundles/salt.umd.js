(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('salt', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory(global.salt = {}, global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    var _c0 = ["*"];
    var ButtonComponent = /** @class */ (function () {
        function ButtonComponent() {
        }
        ButtonComponent.prototype.ngOnInit = function () {
        };
        ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
        ButtonComponent.ɵcmp = core.ɵɵdefineComponent({ type: ButtonComponent, selectors: [["salt-button"]], ngContentSelectors: _c0, decls: 2, vars: 0, template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵelementStart(0, "button");
                core.ɵɵprojection(1);
                core.ɵɵelementEnd();
            } }, encapsulation: 2 });
        return ButtonComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(ButtonComponent, [{
            type: core.Component,
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
        ButtonDirective.ɵdir = core.ɵɵdefineDirective({ type: ButtonDirective, selectors: [["", "buttonCheckbox", ""]], hostVars: 2, hostBindings: function ButtonDirective_HostBindings(rf, ctx) { if (rf & 1) {
                core.ɵɵlistener("click", function ButtonDirective_click_HostBindingHandler() { return ctx.onClick(); });
            } if (rf & 2) {
                core.ɵɵclassProp("active", ctx.state);
            } }, inputs: { btnCheckboxTrue: "btnCheckboxTrue", btnCheckboxFalse: "btnCheckboxFalse" } });
        return ButtonDirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(ButtonDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[buttonCheckbox]',
                }]
        }], null, { btnCheckboxTrue: [{
                type: core.Input
            }], btnCheckboxFalse: [{
                type: core.Input
            }], state: [{
                type: core.HostBinding,
                args: ['class.active']
            }], onClick: [{
                type: core.HostListener,
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
        SaltModule.ɵmod = core.ɵɵdefineNgModule({ type: SaltModule });
        SaltModule.ɵinj = core.ɵɵdefineInjector({ factory: function SaltModule_Factory(t) { return new (t || SaltModule)(); }, imports: [[
                    common.CommonModule
                ]] });
        return SaltModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(SaltModule, { declarations: [ButtonComponent,
            ButtonDirective], imports: [common.CommonModule], exports: [ButtonComponent,
            ButtonDirective] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(SaltModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule
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

    exports.ButtonComponent = ButtonComponent;
    exports.ButtonDirective = ButtonDirective;
    exports.SaltModule = SaltModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=salt.umd.js.map
