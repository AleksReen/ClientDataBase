import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from 'app/client';


@Component({
  selector: 'app-table-data-base',
  templateUrl: './app-table-data-base.component.html',
  styleUrls: ['./app-table-data-base.component.css']
})
export class TableDataBaseComponent implements OnInit {

  @Input()
  public listClients: Client [] = [];
  @Output()
  public deleteClientId = new EventEmitter <number> ();
  @Output()
  public editeClientId = new EventEmitter <number> ();
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
