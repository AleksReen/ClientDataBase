import { Client } from './../client';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './app-table.component.html',
  styleUrls: ['./app-table.component.css']
})
export class TableComponent implements OnInit {

  @Input()
  public listClients: Client [] = [];
  @Output()
  public deleteClientTable = new EventEmitter <number> ();
  @Output()
  public editeClientTable = new EventEmitter <number> ();
  public searchState = 'default';

  public searchClientList: Client [] = [];


  constructor() {}

  ngOnInit() {}

   public searchClient(name: string) {
    this.searchState = 'search';
    this.searchClientList = [];
    this.listClients.forEach( client => {if (client.getName === name) {this.searchClientList.push(client); }; });
  }

  public returnBase(state: string) {
    if ( state !== 'default') {
      throw new  Error ('State is not correct');
    }
    this.searchState = state;
  }

  public deleteClient(id: number) {
    this.deleteClientTable.emit(id);
    if (this.searchClientList.length >= 0) {
    this.searchClientList = this.searchClientList.filter(client => client.getId !== id);
    }
  }

   public editeClient(id: number) {
    this.editeClientTable.emit(id);
  }
}
