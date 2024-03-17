import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, Input, ViewChild } from '@angular/core';

class NgxTCarouselComponent {
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

/**
 * Generated bundle index. Do not edit.
 */

export { NgxTCarouselComponent };
//# sourceMappingURL=ngx-tcarousel.mjs.map
