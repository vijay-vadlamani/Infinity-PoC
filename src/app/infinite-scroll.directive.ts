import { Directive, AfterViewInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/startWith';


@Directive({
  selector: '[InfiniteScroll]',
  host: {
    '(scroll)':'onScroll($event)'
  },
})
export class InfiniteScrollDirective {

  public _element: any;
  public _count: number;

  @Input()
  scrollTrigger: number;

  @Output()
  OnScrollMethod = new EventEmitter<any>();

  constructor(public element:ElementRef) {
    this._element = this.element.nativeElement;
    if (!this.scrollTrigger) {
      this.scrollTrigger = 1;
    }
  }
  onScroll() {
    this._count++;
    if (this._element.scrollTop + this._element.clientHeight >= this._element.scrollHeight) {
      this.OnScrollMethod.emit(null);
    } else {
      if (this._count % this.scrollTrigger === 0) {
        this.OnScrollMethod.emit(null);
      }
    }
  }
}
