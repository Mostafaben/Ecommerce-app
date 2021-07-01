import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
})
export class PaginatorComponent implements OnInit {
  readonly MAX_PAGES = 10;

  @Input() numberOfPages: number = 22;
  @Input() selectedPage: number = 0;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter();
  public range = 0;
  constructor() {}

  ngOnInit(): void {}

  setPages(): Array<any> {
    if (this.numberOfPages <= this.MAX_PAGES)
      return new Array(this.numberOfPages);
    else if (this.numberOfPages > (this.range + 1) * this.MAX_PAGES)
      return new Array(this.MAX_PAGES);
    return new Array(this.numberOfPages % (this.range * this.MAX_PAGES));
  }

  changePage(page: number) {
    this.selectedPage = page + this.range * this.MAX_PAGES;
    this.pageChanged.emit(this.selectedPage);
    console.log(this.selectedPage);
  }

  nextPage() {
    if ((this.range + 1) * this.MAX_PAGES >= this.numberOfPages) return;
    this.range++;
    this.selectedPage = 0;
    this.pageChanged.emit(this.range * this.MAX_PAGES);
  }

  previousPage() {
    if (this.range == 0) return;
    this.range--;
    this.selectedPage = 0;
    this.pageChanged.emit(this.range * this.MAX_PAGES);
  }
}
