import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from 'app/client';


@Component({
  selector: 'app-table-search',
  templateUrl: './app-table-search.component.html',
  styleUrls: ['./app-table-search.component.css']
})
export class TableSearchComponent implements OnInit {

  @Output()
  public deleteClientId = new EventEmitter <number> ();
  @Output()
  public editeClientId = new EventEmitter <number> ();
  @Input()
  public searchClientList: Client [] = [];
  public selectedClient: Client;

  constructor() { }

  ngOnInit() {
  }

  public onDelete(id: number) {
    this.deleteClientId.emit(id);
  }

   public onEdite(id: number) {
    this.editeClientId.emit(id);
  }

  public onSelect(item: Client) {
     this.selectedClient = item;
  }

}
