import { Directive, HostListener, Input, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
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
    ButtonDirective.ɵdir = i0.ɵɵdefineDirective({ type: ButtonDirective, selectors: [["", "buttonCheckbox", ""]], hostVars: 2, hostBindings: function ButtonDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function ButtonDirective_click_HostBindingHandler() { return ctx.onClick(); });
        } if (rf & 2) {
            i0.ɵɵclassProp("active", ctx.state);
        } }, inputs: { btnCheckboxTrue: "btnCheckboxTrue", btnCheckboxFalse: "btnCheckboxFalse" } });
    return ButtonDirective;
}());
export { ButtonDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ButtonDirective, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NhbHQvIiwic291cmNlcyI6WyJhcGkvY29tcG9uZW50cy9idXR0b25zL2J1dHRvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUVILFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUlMLFdBQVcsRUFDZCxNQUFNLGVBQWUsQ0FBQzs7QUFJdkI7SUFBQTtRQUthLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUdsQyxVQUFLLEdBQUcsS0FBSyxDQUFDO0tBeUNqQjtJQXBDMEIsaUNBQU8sR0FBOUI7UUFDSSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQseUNBQXlDO0lBQ3pDLGtDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxpQ0FBaUM7SUFDdkIsb0NBQVUsR0FBcEI7UUFDSSxPQUFPLE9BQU8sSUFBSSxDQUFDLGVBQWUsS0FBSyxXQUFXO1lBQzlDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDdEMsQ0FBQztJQUNTLHFDQUFXLEdBQXJCO1FBQ0ksT0FBTyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxXQUFXO1lBQy9DLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUN4QyxDQUFDO0lBRUQsNEJBQTRCO0lBQzVCLGdDQUFNLEdBQU4sVUFBTyxLQUFjO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUNqRSxDQUFDO0lBRUQsb0NBQVUsR0FBVixVQUFXLEtBQVU7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxLQUFLLEtBQUssQ0FBQztRQUN2QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1RCxDQUFDO0lBRUQsMENBQWdCLEdBQWhCLGNBQTBCLENBQUM7SUFDM0IsMENBQWdCLEdBQWhCLFVBQWlCLEVBQVksSUFBUyxDQUFDO0lBQ3ZDLDJDQUFpQixHQUFqQixVQUFrQixFQUFZLElBQVMsQ0FBQztrRkE3Qy9CLGVBQWU7d0RBQWYsZUFBZTtnR0FBZixhQUFTOzs7OzBCQWxCdEI7Q0FnRUMsQUFsREQsSUFrREM7U0E5Q1ksZUFBZTtrREFBZixlQUFlO2NBSjNCLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsa0JBQWtCO2FBQy9COztrQkFHSSxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxXQUFXO21CQUFDLGNBQWM7O2tCQU0xQixZQUFZO21CQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIERpcmVjdGl2ZSxcbiAgICBIb3N0TGlzdGVuZXIsXG4gICAgSW5wdXQsXG4gICAgT3V0cHV0LFxuICAgIFByb3ZpZGVyLFxuICAgIE9uSW5pdCxcbiAgICBIb3N0QmluZGluZ1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tidXR0b25DaGVja2JveF0nLFxufSlcblxuZXhwb3J0IGNsYXNzIEJ1dHRvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xuICAgIEBJbnB1dCgpIGJ0bkNoZWNrYm94VHJ1ZSA9IHRydWU7XG4gICAgQElucHV0KCkgYnRuQ2hlY2tib3hGYWxzZSA9IGZhbHNlO1xuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxuICAgIHN0YXRlID0gZmFsc2U7XG5cbiAgICBwcm90ZWN0ZWQgdmFsdWU6IGFueTtcbiAgICBwcm90ZWN0ZWQgaXNEaXNhYmxlOiBib29sZWFuO1xuXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSBvbkNsaWNrKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pc0Rpc2FibGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRvZ2dsZSghdGhpcy5zdGF0ZSk7XG4gICAgfVxuXG4gICAgLy8gU2V0IHdoZW4gaW5pdCBjYWxsIHRoZSB0b2dnbGUgZnVuY3Rpb25cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy50b2dnbGUodGhpcy5nZXRUcnVlVmFsID09PSB0aGlzLnZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyBHZXQgdmFsdWUgYW5kIHZhbGlkYXRpb24gdmFsdWVcbiAgICBwcm90ZWN0ZWQgZ2V0VHJ1ZVZhbCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLmJ0bkNoZWNrYm94VHJ1ZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gdGhpcy5idG5DaGVja2JveFRydWUgOiB0cnVlO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0RmFsc2VWYWwoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5idG5DaGVja2JveEZhbHNlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyB0aGlzLmJ0bkNoZWNrYm94RmFsc2UgOiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBGdW5jdGlvbiBmb3IgdG9nZ2xlIHZhbHVlXG4gICAgdG9nZ2xlKHN0YXRlOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuc3RhdGUgPyB0aGlzLmdldFRydWVWYWwgOiB0aGlzLmdldEZhbHNlVmFsO1xuICAgIH1cblxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSApOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuZ2V0VHJ1ZVZhbCA9PT0gdmFsdWU7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZSA/IHRoaXMuZ2V0VHJ1ZVZhbCA6IHRoaXMuZ2V0RmFsc2VWYWw7XG4gICAgfVxuXG4gICAgc2V0RGlzYWJsZWRTdGF0ZSgpOiB2b2lkIHt9XG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKCkgPT4ge30pOiB2b2lkIHt9XG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7fVxufVxuIl19