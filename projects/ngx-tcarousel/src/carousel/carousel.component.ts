import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ngx-tcarousel',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class NgxTCarouselComponent implements OnChanges {
  @Input({ required: true, alias: 'itemCount' }) itemCount: number = 0;
  @Input('itemsPerPage') itemsPerPage: number = 1;
  @Input('interval') interval: number = 0;
  @Input('gap') gap: number = 0;
  @Input('freezePeriod') freezePeriod: number = 5000;
  @Input('showHandles') showHandles: boolean = false;
  @Input('showIndicators') showIndicators: boolean = true;
  @Input('mainColor') mainColor: string = '#C7A867';
  @Input('secondColor') secondColor: string = 'black';
  @Input('shadowMode') shadowMode: boolean = false;
  @Input('shadowDivisor') shadowDivisor: number = 2;
  @Input('startIndex') startIndex: number = 0;

  @ViewChild('itemsElement') itemsElement?: ElementRef;

  timer = false;
  currentItem = 0;
  items: number[] = [];

  ngOnChanges() {
    this.items = [...Array(this.itemCount).keys()];
    this.currentItem = this.startIndex;
    this.scrolProduct(this.currentItem, false, true);
    this.autoMove();
  }

  sp: any | null = null;
  scrolProduct(n: number, freez: boolean = true, force: boolean = false) {
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

    if (this.itemsElement && this.itemsElement.nativeElement.children) {
      if ((n * this.itemsPerPage) >= this.itemCount) {
        n = 0;
      } else if (n < 0) {
        n = this.itemCount - 1;
      }

      let container = this.itemsElement.nativeElement;
      let dir = getComputedStyle(container).direction;
      container.scrollLeft = (dir === 'rtl' ? -1 : 1) * n * container.offsetWidth / (this.shadowMode ? this.shadowDivisor : 1);
      [...this.itemsElement.nativeElement.children].forEach((q: HTMLElement) => {
        q.classList.remove('active_tcar_item');
      });
      [...this.itemsElement.nativeElement.children].slice(n * this.itemsPerPage, (n + 1) * this.itemsPerPage).forEach((q: HTMLElement) => {
        q.classList.add('active_tcar_item');
      });
    } else if (force) {
      setTimeout(() => this.scrolProduct(n, freez, force), 100);
      return;
    }

    this.currentItem = n;
    this.timer = false;
    if (freez) {
      this.sp = setTimeout(() => { this.autoMove(); }, this.freezePeriod);
    } else {
      this.autoMove();
    }
  }

  mv: any | null = null;
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
}
