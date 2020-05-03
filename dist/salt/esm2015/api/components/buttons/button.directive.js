import { Directive, HostListener, Input, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
export class ButtonDirective {
    constructor() {
        this.btnCheckboxTrue = true;
        this.btnCheckboxFalse = false;
        this.state = false;
    }
    onClick() {
        if (this.isDisable) {
            return;
        }
        this.toggle(!this.state);
    }
    // Set when init call the toggle function
    ngOnInit() {
        this.toggle(this.getTrueVal === this.value);
    }
    // Get value and validation value
    getTrueVal() {
        return typeof this.btnCheckboxTrue !== 'undefined'
            ? this.btnCheckboxTrue : true;
    }
    getFalseVal() {
        return typeof this.btnCheckboxFalse !== 'undefined'
            ? this.btnCheckboxFalse : false;
    }
    // Function for toggle value
    toggle(state) {
        this.state = state;
        this.value = this.state ? this.getTrueVal : this.getFalseVal;
    }
    writeValue(value) {
        this.state = this.getTrueVal === value;
        this.value = value ? this.getTrueVal : this.getFalseVal;
    }
    setDisabledState() { }
    registerOnChange(fn) { }
    registerOnTouched(fn) { }
}
ButtonDirective.ɵfac = function ButtonDirective_Factory(t) { return new (t || ButtonDirective)(); };
ButtonDirective.ɵdir = i0.ɵɵdefineDirective({ type: ButtonDirective, selectors: [["", "buttonCheckbox", ""]], hostVars: 2, hostBindings: function ButtonDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function ButtonDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } if (rf & 2) {
        i0.ɵɵclassProp("active", ctx.state);
    } }, inputs: { btnCheckboxTrue: "btnCheckboxTrue", btnCheckboxFalse: "btnCheckboxFalse" } });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NhbHQvIiwic291cmNlcyI6WyJhcGkvY29tcG9uZW50cy9idXR0b25zL2J1dHRvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUVILFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUlMLFdBQVcsRUFDZCxNQUFNLGVBQWUsQ0FBQzs7QUFRdkIsTUFBTSxPQUFPLGVBQWU7SUFKNUI7UUFLYSxvQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2QixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFHbEMsVUFBSyxHQUFHLEtBQUssQ0FBQztLQXlDakI7SUFwQzBCLE9BQU87UUFDMUIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELHlDQUF5QztJQUN6QyxRQUFRO1FBQ0osSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsaUNBQWlDO0lBQ3ZCLFVBQVU7UUFDaEIsT0FBTyxPQUFPLElBQUksQ0FBQyxlQUFlLEtBQUssV0FBVztZQUM5QyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3RDLENBQUM7SUFDUyxXQUFXO1FBQ2pCLE9BQU8sT0FBTyxJQUFJLENBQUMsZ0JBQWdCLEtBQUssV0FBVztZQUMvQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDeEMsQ0FBQztJQUVELDRCQUE0QjtJQUM1QixNQUFNLENBQUMsS0FBYztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDakUsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFVO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsS0FBSyxLQUFLLENBQUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUQsQ0FBQztJQUVELGdCQUFnQixLQUFVLENBQUM7SUFDM0IsZ0JBQWdCLENBQUMsRUFBWSxJQUFTLENBQUM7SUFDdkMsaUJBQWlCLENBQUMsRUFBWSxJQUFTLENBQUM7OzhFQTdDL0IsZUFBZTtvREFBZixlQUFlOzRGQUFmLGFBQVM7Ozs7a0RBQVQsZUFBZTtjQUozQixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjthQUMvQjs7a0JBR0ksS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsV0FBVzttQkFBQyxjQUFjOztrQkFNMUIsWUFBWTttQkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBEaXJlY3RpdmUsXG4gICAgSG9zdExpc3RlbmVyLFxuICAgIElucHV0LFxuICAgIE91dHB1dCxcbiAgICBQcm92aWRlcixcbiAgICBPbkluaXQsXG4gICAgSG9zdEJpbmRpbmdcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbYnV0dG9uQ2hlY2tib3hdJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBCdXR0b25EaXJlY3RpdmUgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcbiAgICBASW5wdXQoKSBidG5DaGVja2JveFRydWUgPSB0cnVlO1xuICAgIEBJbnB1dCgpIGJ0bkNoZWNrYm94RmFsc2UgPSBmYWxzZTtcblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcbiAgICBzdGF0ZSA9IGZhbHNlO1xuXG4gICAgcHJvdGVjdGVkIHZhbHVlOiBhbnk7XG4gICAgcHJvdGVjdGVkIGlzRGlzYWJsZTogYm9vbGVhbjtcblxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgb25DbGljaygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b2dnbGUoIXRoaXMuc3RhdGUpO1xuICAgIH1cblxuICAgIC8vIFNldCB3aGVuIGluaXQgY2FsbCB0aGUgdG9nZ2xlIGZ1bmN0aW9uXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlKHRoaXMuZ2V0VHJ1ZVZhbCA9PT0gdGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gR2V0IHZhbHVlIGFuZCB2YWxpZGF0aW9uIHZhbHVlXG4gICAgcHJvdGVjdGVkIGdldFRydWVWYWwoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5idG5DaGVja2JveFRydWUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IHRoaXMuYnRuQ2hlY2tib3hUcnVlIDogdHJ1ZTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldEZhbHNlVmFsKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHRoaXMuYnRuQ2hlY2tib3hGYWxzZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gdGhpcy5idG5DaGVja2JveEZhbHNlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gRnVuY3Rpb24gZm9yIHRvZ2dsZSB2YWx1ZVxuICAgIHRvZ2dsZShzdGF0ZTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnN0YXRlID8gdGhpcy5nZXRUcnVlVmFsIDogdGhpcy5nZXRGYWxzZVZhbDtcbiAgICB9XG5cbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkgKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldFRydWVWYWwgPT09IHZhbHVlO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWUgPyB0aGlzLmdldFRydWVWYWwgOiB0aGlzLmdldEZhbHNlVmFsO1xuICAgIH1cblxuICAgIHNldERpc2FibGVkU3RhdGUoKTogdm9pZCB7fVxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICgpID0+IHt9KTogdm9pZCB7fVxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge31cbn1cbiJdfQ==