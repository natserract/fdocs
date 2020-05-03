import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/buttons/button.component';
import { ButtonDirective } from './components/buttons/button.directive';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
export class SaltModule {
    static forRoot() {
        return {
            ngModule: SaltModule,
            providers: []
        };
    }
}
SaltModule.ɵmod = i0.ɵɵdefineNgModule({ type: SaltModule });
SaltModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SaltModule_Factory(t) { return new (t || SaltModule)(); }, imports: [[
            CommonModule
        ]] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FsdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zYWx0LyIsInNvdXJjZXMiOlsiYXBpL3NhbHQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQWUvQyxNQUFNLE9BQU8sVUFBVTtJQUNyQixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsVUFBVTtZQUNwQixTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7SUFDSixDQUFDOzs4Q0FOVSxVQUFVO21HQUFWLFVBQVUsa0JBWlo7WUFDUCxZQUFZO1NBQ2I7d0ZBVVUsVUFBVSxtQkFSbkIsZUFBZTtRQUNmLGVBQWUsYUFKZixZQUFZLGFBT1osZUFBZTtRQUNmLGVBQWU7a0RBR04sVUFBVTtjQWJ0QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLGVBQWU7b0JBQ2YsZUFBZTtpQkFDaEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGVBQWU7b0JBQ2YsZUFBZTtpQkFDaEI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYnV0dG9ucy9idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IEJ1dHRvbkRpcmVjdGl2ZSB9IGZyb20gJy4vY29tcG9uZW50cy9idXR0b25zL2J1dHRvbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBCdXR0b25Db21wb25lbnQsXG4gICAgQnV0dG9uRGlyZWN0aXZlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBCdXR0b25Db21wb25lbnQsXG4gICAgQnV0dG9uRGlyZWN0aXZlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2FsdE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU2FsdE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW11cbiAgICB9O1xuICB9XG4gfVxuIl19