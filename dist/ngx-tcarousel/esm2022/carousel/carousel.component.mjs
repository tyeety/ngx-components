import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class NgxTCarouselComponent {
    constructor() {
        this.itemsPerPage = 1;
        this.interval = 0;
        this.gap = 0;
        this.itemCount = 0;
        this.freezePeriod = 5000;
        this.showHandles = false;
        this.mainColor = '#C7A867';
        this.secondColor = 'black';
        this.timer = false;
        this.currentItem = 0;
        this.items = [];
        this.sp = null;
        this.mv = null;
    }
    ngOnChanges() {
        this.items = [...Array(this.itemCount).keys()];
        this.autoMove();
    }
    scrolProduct(n, freez = true) {
        //clear scrolProduct
        if (this.sp) {
            clearTimeout(this.sp);
            this.sp = null;
        }
        //clear autoMove
        if (this.mv) {
            clearTimeout(this.mv);
            this.mv = null;
        }
        if (n * this.itemsPerPage >= this.itemCount) {
            n = 0;
        }
        else if (n < 0) {
            n = this.itemCount - 1;
        }
        if (this.itemsElement && this.itemsElement.nativeElement.children) {
            let container = this.itemsElement.nativeElement;
            let dir = getComputedStyle(container).direction;
            container.scrollLeft = (dir === 'rtl' ? -1 : 1) * n * container.offsetWidth;
        }
        this.currentItem = n;
        this.timer = false;
        if (freez) {
            this.sp = setTimeout(() => { this.autoMove(); }, this.freezePeriod);
        }
        else {
            this.autoMove();
        }
    }
    autoMove() {
        //clear autoMove
        if (this.mv) {
            clearTimeout(this.mv);
            this.mv = null;
        }
        this.timer = false;
        if (this.interval > 0) {
            setTimeout(() => {
                this.mv = setTimeout(() => {
                    this.scrolProduct(this.currentItem + 1, false);
                }, this.interval);
                this.timer = !!this.interval;
            }, 100);
        }
    }
    btnBack() {
        this.scrolProduct(this.currentItem - 1, false);
    }
    btnNext() {
        this.scrolProduct(this.currentItem + 1, false);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.0", ngImport: i0, type: NgxTCarouselComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.0", type: NgxTCarouselComponent, isStandalone: true, selector: "ngx-tcarousel", inputs: { itemsPerPage: "itemsPerPage", interval: "interval", gap: "gap", itemCount: "itemCount", freezePeriod: "freezePeriod", showHandles: "showHandles", mainColor: "mainColor", secondColor: "secondColor" }, viewQueries: [{ propertyName: "itemsElement", first: true, predicate: ["itemsElement"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<ng-container *ngIf=\"itemsPerPage > 0\">\r\n  <div class=\"hidescroll items\" [style.--gap]=\"gap + 'px'\" #itemsElement>\r\n    <ng-content></ng-content>\r\n  </div>\r\n\r\n  <div class=\"d\" [style.--mainColor]=\"mainColor\" [style.--secondcolor]=\"secondColor\">\r\n\r\n    <button type=\"button\" class=\"nav prev\" (click)=\"btnBack()\">\r\n      <svg [attr.fill]=\"secondColor\" class=\"flip\" width=\"45\" height=\"45\" viewBox=\"0 -960 960 960\">\r\n        <path d=\"M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z\" />\r\n      </svg>\r\n    </button>\r\n\r\n    <div class=\"carousel\">\r\n\r\n      <div class=\"indicators\">\r\n        <ng-container *ngFor=\"let p of items; let i = index\">\r\n          <button *ngIf=\"i % itemsPerPage === 0\" [attr.index]=\"i / itemsPerPage\" (click)=\"scrolProduct(i / itemsPerPage)\" type=\"button\" class=\"indicator\" [class.active]=\"currentItem === i / itemsPerPage\"></button>\r\n        </ng-container>\r\n      </div>\r\n      <div *ngIf=\"!!interval\" class=\"timer\" [class.full]=\"timer\" [style.--interval]=\"interval + 'ms'\"></div>\r\n\r\n    </div>\r\n\r\n    <button type=\"button\" class=\"nav next\" (click)=\"btnNext()\">\r\n      <svg [attr.fill]=\"secondColor\" class=\"flip\" width=\"45\" height=\"45\" viewBox=\"0 -960 960 960\">\r\n        <path d=\"M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z\" />\r\n      </svg>\r\n    </button>\r\n\r\n  </div>\r\n</ng-container>\r\n", styles: [".items{display:flex;align-items:center;gap:var(--gap);overflow:auto;scroll-snap-type:x proximity;scroll-behavior:smooth}.items>*{scroll-snap-align:start}.d{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center}.d .carousel{display:flex;flex-direction:column;flex-wrap:nowrap;align-items:center;justify-content:center;margin:20px auto}.d .carousel .indicators{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:center;gap:6px}.d .carousel .indicators .indicator{width:15px;height:15px;background:#fff;border-radius:10px;transition-duration:.2s;outline:none;border-color:var(--secondcolor)}.d .carousel .indicators .indicator.active{width:30px;background-color:var(--mainColor)}.d .carousel .timer{width:100%;max-width:200px;height:1px;background-color:var(--mainColor);margin-top:10px;position:relative}.d .carousel .timer:before{content:\" \";width:0%;height:5px;position:absolute;top:0;background-color:gray;border-radius:5px;transform:translateY(-50%);transition-timing-function:linear}.d .carousel .timer.full:before{transition-duration:var(--interval);width:100%}.d .nav{width:45px;height:45px;background-color:transparent;border:2px solid var(--mainColor);border-radius:10px;outline:none;display:flex;align-items:center;justify-content:center;cursor:pointer}.d .nav.prev{transform:rotateY(180deg)}.hidescroll::-webkit-scrollbar{display:none}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.0", ngImport: i0, type: NgxTCarouselComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-tcarousel', standalone: true, imports: [
                        CommonModule
                    ], encapsulation: ViewEncapsulation.None, template: "<ng-container *ngIf=\"itemsPerPage > 0\">\r\n  <div class=\"hidescroll items\" [style.--gap]=\"gap + 'px'\" #itemsElement>\r\n    <ng-content></ng-content>\r\n  </div>\r\n\r\n  <div class=\"d\" [style.--mainColor]=\"mainColor\" [style.--secondcolor]=\"secondColor\">\r\n\r\n    <button type=\"button\" class=\"nav prev\" (click)=\"btnBack()\">\r\n      <svg [attr.fill]=\"secondColor\" class=\"flip\" width=\"45\" height=\"45\" viewBox=\"0 -960 960 960\">\r\n        <path d=\"M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z\" />\r\n      </svg>\r\n    </button>\r\n\r\n    <div class=\"carousel\">\r\n\r\n      <div class=\"indicators\">\r\n        <ng-container *ngFor=\"let p of items; let i = index\">\r\n          <button *ngIf=\"i % itemsPerPage === 0\" [attr.index]=\"i / itemsPerPage\" (click)=\"scrolProduct(i / itemsPerPage)\" type=\"button\" class=\"indicator\" [class.active]=\"currentItem === i / itemsPerPage\"></button>\r\n        </ng-container>\r\n      </div>\r\n      <div *ngIf=\"!!interval\" class=\"timer\" [class.full]=\"timer\" [style.--interval]=\"interval + 'ms'\"></div>\r\n\r\n    </div>\r\n\r\n    <button type=\"button\" class=\"nav next\" (click)=\"btnNext()\">\r\n      <svg [attr.fill]=\"secondColor\" class=\"flip\" width=\"45\" height=\"45\" viewBox=\"0 -960 960 960\">\r\n        <path d=\"M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z\" />\r\n      </svg>\r\n    </button>\r\n\r\n  </div>\r\n</ng-container>\r\n", styles: [".items{display:flex;align-items:center;gap:var(--gap);overflow:auto;scroll-snap-type:x proximity;scroll-behavior:smooth}.items>*{scroll-snap-align:start}.d{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center}.d .carousel{display:flex;flex-direction:column;flex-wrap:nowrap;align-items:center;justify-content:center;margin:20px auto}.d .carousel .indicators{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:center;gap:6px}.d .carousel .indicators .indicator{width:15px;height:15px;background:#fff;border-radius:10px;transition-duration:.2s;outline:none;border-color:var(--secondcolor)}.d .carousel .indicators .indicator.active{width:30px;background-color:var(--mainColor)}.d .carousel .timer{width:100%;max-width:200px;height:1px;background-color:var(--mainColor);margin-top:10px;position:relative}.d .carousel .timer:before{content:\" \";width:0%;height:5px;position:absolute;top:0;background-color:gray;border-radius:5px;transform:translateY(-50%);transition-timing-function:linear}.d .carousel .timer.full:before{transition-duration:var(--interval);width:100%}.d .nav{width:45px;height:45px;background-color:transparent;border:2px solid var(--mainColor);border-radius:10px;outline:none;display:flex;align-items:center;justify-content:center;cursor:pointer}.d .nav.prev{transform:rotateY(180deg)}.hidescroll::-webkit-scrollbar{display:none}\n"] }]
        }], propDecorators: { itemsPerPage: [{
                type: Input,
                args: ['itemsPerPage']
            }], interval: [{
                type: Input,
                args: ['interval']
            }], gap: [{
                type: Input,
                args: ['gap']
            }], itemCount: [{
                type: Input,
                args: ['itemCount']
            }], freezePeriod: [{
                type: Input,
                args: ['freezePeriod']
            }], showHandles: [{
                type: Input,
                args: ['showHandles']
            }], mainColor: [{
                type: Input,
                args: ['mainColor']
            }], secondColor: [{
                type: Input,
                args: ['secondColor']
            }], itemsElement: [{
                type: ViewChild,
                args: ['itemsElement']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRjYXJvdXNlbC9zcmMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRjYXJvdXNlbC9zcmMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFhLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBWXRHLE1BQU0sT0FBTyxxQkFBcUI7SUFWbEM7UUFXeUIsaUJBQVksR0FBVyxDQUFDLENBQUM7UUFDN0IsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUMxQixRQUFHLEdBQVcsQ0FBQyxDQUFDO1FBQ1YsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUNuQixpQkFBWSxHQUFXLElBQUksQ0FBQztRQUM3QixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUMvQixjQUFTLEdBQVcsU0FBUyxDQUFDO1FBQzVCLGdCQUFXLEdBQVcsT0FBTyxDQUFDO1FBSXBELFVBQUssR0FBRyxLQUFLLENBQUM7UUFDZCxnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixVQUFLLEdBQWEsRUFBRSxDQUFDO1FBT3JCLE9BQUUsR0FBZSxJQUFJLENBQUM7UUFrQ3RCLE9BQUUsR0FBZSxJQUFJLENBQUM7S0F5QnZCO0lBaEVDLFdBQVc7UUFDVCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFHRCxZQUFZLENBQUMsQ0FBUyxFQUFFLFFBQWlCLElBQUk7UUFDM0Msb0JBQW9CO1FBQ3BCLElBQUksSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ1osWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztRQUNqQixDQUFDO1FBQ0QsZ0JBQWdCO1FBQ2hCLElBQUksSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ1osWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztRQUNqQixDQUFDO1FBRUQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDNUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNSLENBQUM7YUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUNqQixDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDekIsQ0FBQztRQUVELElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNsRSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQztZQUNoRCxJQUFJLEdBQUcsR0FBRyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDaEQsU0FBUyxDQUFDLFVBQVUsR0FBRyxDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQztRQUM5RSxDQUFDO1FBRUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxLQUFLLEVBQUUsQ0FBQztZQUNWLElBQUksQ0FBQyxFQUFFLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdEUsQ0FBQzthQUFNLENBQUM7WUFDTixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEIsQ0FBQztJQUNILENBQUM7SUFHRCxRQUFRO1FBQ04sZ0JBQWdCO1FBQ2hCLElBQUksSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ1osWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztRQUNqQixDQUFDO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ3RCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLEVBQUUsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFO29CQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNqRCxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQy9CLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNWLENBQUM7SUFDSCxDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUM7OEdBL0VVLHFCQUFxQjtrR0FBckIscUJBQXFCLDhaQ2JsQyx3N0NBZ0NBLDQ2Q0R6QkksWUFBWTs7MkZBTUgscUJBQXFCO2tCQVZqQyxTQUFTOytCQUNFLGVBQWUsY0FDYixJQUFJLFdBQ1A7d0JBQ1AsWUFBWTtxQkFDYixpQkFHYyxpQkFBaUIsQ0FBQyxJQUFJOzhCQUdkLFlBQVk7c0JBQWxDLEtBQUs7dUJBQUMsY0FBYztnQkFDRixRQUFRO3NCQUExQixLQUFLO3VCQUFDLFVBQVU7Z0JBQ0gsR0FBRztzQkFBaEIsS0FBSzt1QkFBQyxLQUFLO2dCQUNRLFNBQVM7c0JBQTVCLEtBQUs7dUJBQUMsV0FBVztnQkFDSyxZQUFZO3NCQUFsQyxLQUFLO3VCQUFDLGNBQWM7Z0JBQ0MsV0FBVztzQkFBaEMsS0FBSzt1QkFBQyxhQUFhO2dCQUNBLFNBQVM7c0JBQTVCLEtBQUs7dUJBQUMsV0FBVztnQkFDSSxXQUFXO3NCQUFoQyxLQUFLO3VCQUFDLGFBQWE7Z0JBRU8sWUFBWTtzQkFBdEMsU0FBUzt1QkFBQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC10Y2Fyb3VzZWwnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsOiAnLi9jYXJvdXNlbC5jb21wb25lbnQuc2NzcycsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4VENhcm91c2VsQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoJ2l0ZW1zUGVyUGFnZScpIGl0ZW1zUGVyUGFnZTogbnVtYmVyID0gMTtcclxuICBASW5wdXQoJ2ludGVydmFsJykgaW50ZXJ2YWw6IG51bWJlciA9IDA7XHJcbiAgQElucHV0KCdnYXAnKSBnYXA6IG51bWJlciA9IDA7XHJcbiAgQElucHV0KCdpdGVtQ291bnQnKSBpdGVtQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgQElucHV0KCdmcmVlemVQZXJpb2QnKSBmcmVlemVQZXJpb2Q6IG51bWJlciA9IDUwMDA7XHJcbiAgQElucHV0KCdzaG93SGFuZGxlcycpIHNob3dIYW5kbGVzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCdtYWluQ29sb3InKSBtYWluQ29sb3I6IHN0cmluZyA9ICcjQzdBODY3JztcclxuICBASW5wdXQoJ3NlY29uZENvbG9yJykgc2Vjb25kQ29sb3I6IHN0cmluZyA9ICdibGFjayc7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2l0ZW1zRWxlbWVudCcpIGl0ZW1zRWxlbWVudD86IEVsZW1lbnRSZWY7XHJcblxyXG4gIHRpbWVyID0gZmFsc2U7XHJcbiAgY3VycmVudEl0ZW0gPSAwO1xyXG4gIGl0ZW1zOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIHRoaXMuaXRlbXMgPSBbLi4uQXJyYXkodGhpcy5pdGVtQ291bnQpLmtleXMoKV07XHJcbiAgICB0aGlzLmF1dG9Nb3ZlKCk7XHJcbiAgfVxyXG5cclxuICBzcDogYW55IHwgbnVsbCA9IG51bGw7XHJcbiAgc2Nyb2xQcm9kdWN0KG46IG51bWJlciwgZnJlZXo6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICAvL2NsZWFyIHNjcm9sUHJvZHVjdFxyXG4gICAgaWYgKHRoaXMuc3ApIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc3ApO1xyXG4gICAgICB0aGlzLnNwID0gbnVsbDtcclxuICAgIH1cclxuICAgIC8vY2xlYXIgYXV0b01vdmVcclxuICAgIGlmICh0aGlzLm12KSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLm12KTtcclxuICAgICAgdGhpcy5tdiA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG4gKiB0aGlzLml0ZW1zUGVyUGFnZSA+PSB0aGlzLml0ZW1Db3VudCkge1xyXG4gICAgICBuID0gMDtcclxuICAgIH0gZWxzZSBpZiAobiA8IDApIHtcclxuICAgICAgbiA9IHRoaXMuaXRlbUNvdW50IC0gMTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pdGVtc0VsZW1lbnQgJiYgdGhpcy5pdGVtc0VsZW1lbnQubmF0aXZlRWxlbWVudC5jaGlsZHJlbikge1xyXG4gICAgICBsZXQgY29udGFpbmVyID0gdGhpcy5pdGVtc0VsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuICAgICAgbGV0IGRpciA9IGdldENvbXB1dGVkU3R5bGUoY29udGFpbmVyKS5kaXJlY3Rpb247XHJcbiAgICAgIGNvbnRhaW5lci5zY3JvbGxMZWZ0ID0gKGRpciA9PT0gJ3J0bCcgPyAtMSA6IDEpICogbiAqIGNvbnRhaW5lci5vZmZzZXRXaWR0aDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmN1cnJlbnRJdGVtID0gbjtcclxuICAgIHRoaXMudGltZXIgPSBmYWxzZTtcclxuICAgIGlmIChmcmVleikge1xyXG4gICAgICB0aGlzLnNwID0gc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuYXV0b01vdmUoKTsgfSwgdGhpcy5mcmVlemVQZXJpb2QpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hdXRvTW92ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbXY6IGFueSB8IG51bGwgPSBudWxsO1xyXG4gIGF1dG9Nb3ZlKCkge1xyXG4gICAgLy9jbGVhciBhdXRvTW92ZVxyXG4gICAgaWYgKHRoaXMubXYpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubXYpO1xyXG4gICAgICB0aGlzLm12ID0gbnVsbDtcclxuICAgIH1cclxuICAgIHRoaXMudGltZXIgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLmludGVydmFsID4gMCkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLm12ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNjcm9sUHJvZHVjdCh0aGlzLmN1cnJlbnRJdGVtICsgMSwgZmFsc2UpO1xyXG4gICAgICAgIH0sIHRoaXMuaW50ZXJ2YWwpO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAhIXRoaXMuaW50ZXJ2YWw7XHJcbiAgICAgIH0sIDEwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBidG5CYWNrKCkge1xyXG4gICAgdGhpcy5zY3JvbFByb2R1Y3QodGhpcy5jdXJyZW50SXRlbSAtIDEsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGJ0bk5leHQoKSB7XHJcbiAgICB0aGlzLnNjcm9sUHJvZHVjdCh0aGlzLmN1cnJlbnRJdGVtICsgMSwgZmFsc2UpO1xyXG4gIH1cclxufVxyXG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbXNQZXJQYWdlID4gMFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJoaWRlc2Nyb2xsIGl0ZW1zXCIgW3N0eWxlLi0tZ2FwXT1cImdhcCArICdweCdcIiAjaXRlbXNFbGVtZW50PlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2IGNsYXNzPVwiZFwiIFtzdHlsZS4tLW1haW5Db2xvcl09XCJtYWluQ29sb3JcIiBbc3R5bGUuLS1zZWNvbmRjb2xvcl09XCJzZWNvbmRDb2xvclwiPlxyXG5cclxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibmF2IHByZXZcIiAoY2xpY2spPVwiYnRuQmFjaygpXCI+XHJcbiAgICAgIDxzdmcgW2F0dHIuZmlsbF09XCJzZWNvbmRDb2xvclwiIGNsYXNzPVwiZmxpcFwiIHdpZHRoPVwiNDVcIiBoZWlnaHQ9XCI0NVwiIHZpZXdCb3g9XCIwIC05NjAgOTYwIDk2MFwiPlxyXG4gICAgICAgIDxwYXRoIGQ9XCJNNTA0LTQ4MCAzMjAtNjY0bDU2LTU2IDI0MCAyNDAtMjQwIDI0MC01Ni01NiAxODQtMTg0WlwiIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgPC9idXR0b24+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImNhcm91c2VsXCI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaW5kaWNhdG9yc1wiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHAgb2YgaXRlbXM7IGxldCBpID0gaW5kZXhcIj5cclxuICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJpICUgaXRlbXNQZXJQYWdlID09PSAwXCIgW2F0dHIuaW5kZXhdPVwiaSAvIGl0ZW1zUGVyUGFnZVwiIChjbGljayk9XCJzY3JvbFByb2R1Y3QoaSAvIGl0ZW1zUGVyUGFnZSlcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJpbmRpY2F0b3JcIiBbY2xhc3MuYWN0aXZlXT1cImN1cnJlbnRJdGVtID09PSBpIC8gaXRlbXNQZXJQYWdlXCI+PC9idXR0b24+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2ICpuZ0lmPVwiISFpbnRlcnZhbFwiIGNsYXNzPVwidGltZXJcIiBbY2xhc3MuZnVsbF09XCJ0aW1lclwiIFtzdHlsZS4tLWludGVydmFsXT1cImludGVydmFsICsgJ21zJ1wiPjwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibmF2IG5leHRcIiAoY2xpY2spPVwiYnRuTmV4dCgpXCI+XHJcbiAgICAgIDxzdmcgW2F0dHIuZmlsbF09XCJzZWNvbmRDb2xvclwiIGNsYXNzPVwiZmxpcFwiIHdpZHRoPVwiNDVcIiBoZWlnaHQ9XCI0NVwiIHZpZXdCb3g9XCIwIC05NjAgOTYwIDk2MFwiPlxyXG4gICAgICAgIDxwYXRoIGQ9XCJNNTA0LTQ4MCAzMjAtNjY0bDU2LTU2IDI0MCAyNDAtMjQwIDI0MC01Ni01NiAxODQtMTg0WlwiIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgPC9idXR0b24+XHJcblxyXG4gIDwvZGl2PlxyXG48L25nLWNvbnRhaW5lcj5cclxuIl19