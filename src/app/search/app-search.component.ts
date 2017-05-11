import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.css']
})
export class SearchComponent implements OnInit {

  public searchName: string;
  @Output()
  public emitSearchName = new EventEmitter <string> ();
  public searchState = 'default';
  @Output()
  public emitReturnBase = new EventEmitter <string> ();

  constructor() { }

  ngOnInit() {
  }

  public search(): void {
    this.emitSearchName.emit(this.searchName);
    this.searchState = 'search';
  }

  public returnBase(): void {
    this.searchState = 'default';
    this.emitReturnBase.emit(this.searchState);
  }

}
