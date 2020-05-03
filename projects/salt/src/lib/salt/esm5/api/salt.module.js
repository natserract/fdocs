import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/buttons/button.component';
import { ButtonDirective } from './components/buttons/button.directive';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
var SaltModule = /** @class */ (function () {
    function SaltModule() {
    }
    SaltModule.forRoot = function () {
        return {
            ngModule: SaltModule,
            providers: []
        };
    };
    SaltModule.ɵmod = i0.ɵɵdefineNgModule({ type: SaltModule });
    SaltModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SaltModule_Factory(t) { return new (t || SaltModule)(); }, imports: [[
                CommonModule
            ]] });
    return SaltModule;
}());
export { SaltModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SaltModule, { declarations: [ButtonComponent,
        ButtonDirective], imports: [CommonModule], exports: [ButtonComponent,
        ButtonDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SaltModule, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FsdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zYWx0LyIsInNvdXJjZXMiOlsiYXBpL3NhbHQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUUvQztJQUFBO0tBb0JFO0lBTk8sa0JBQU8sR0FBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsVUFBVTtZQUNwQixTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7SUFDSixDQUFDO2tEQU5VLFVBQVU7dUdBQVYsVUFBVSxrQkFaWjtnQkFDUCxZQUFZO2FBQ2I7cUJBUkg7Q0F5QkUsQUFwQkYsSUFvQkU7U0FQVyxVQUFVO3dGQUFWLFVBQVUsbUJBUm5CLGVBQWU7UUFDZixlQUFlLGFBSmYsWUFBWSxhQU9aLGVBQWU7UUFDZixlQUFlO2tEQUdOLFVBQVU7Y0FidEIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRTtvQkFDWixlQUFlO29CQUNmLGVBQWU7aUJBQ2hCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxlQUFlO29CQUNmLGVBQWU7aUJBQ2hCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbnMvYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCdXR0b25EaXJlY3RpdmUgfSBmcm9tICcuL2NvbXBvbmVudHMvYnV0dG9ucy9idXR0b24uZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQnV0dG9uQ29tcG9uZW50LFxuICAgIEJ1dHRvbkRpcmVjdGl2ZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQnV0dG9uQ29tcG9uZW50LFxuICAgIEJ1dHRvbkRpcmVjdGl2ZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNhbHRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFNhbHRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtdXG4gICAgfTtcbiAgfVxuIH1cbiJdfQ==