import { ElementRef, OnChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NgxTCarouselComponent implements OnChanges {
    itemsPerPage: number;
    interval: number;
    gap: number;
    itemCount: number;
    freezePeriod: number;
    showHandles: boolean;
    mainColor: string;
    secondColor: string;
    itemsElement?: ElementRef;
    timer: boolean;
    currentItem: number;
    items: number[];
    ngOnChanges(): void;
    sp: any | null;
    scrolProduct(n: number, freez?: boolean): void;
    mv: any | null;
    autoMove(): void;
    btnBack(): void;
    btnNext(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxTCarouselComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxTCarouselComponent, "ngx-tcarousel", never, { "itemsPerPage": { "alias": "itemsPerPage"; "required": false; }; "interval": { "alias": "interval"; "required": false; }; "gap": { "alias": "gap"; "required": false; }; "itemCount": { "alias": "itemCount"; "required": false; }; "freezePeriod": { "alias": "freezePeriod"; "required": false; }; "showHandles": { "alias": "showHandles"; "required": false; }; "mainColor": { "alias": "mainColor"; "required": false; }; "secondColor": { "alias": "secondColor"; "required": false; }; }, {}, never, ["*"], true, never>;
}
