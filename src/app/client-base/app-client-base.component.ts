import { Component, OnInit } from '@angular/core';
import { Base } from '../base';
import { Client } from '../client';
import { DataService } from '../data.service';

@Component({
  selector: 'app-client-base',
  templateUrl: './app-client-base.component.html',
  styleUrls: ['./app-client-base.component.css']
})
export class ClientBaseComponent implements OnInit {

  public clientBase: Client[] = [];
  public base: Base;
  public editeClient: Client;
  public toggleFormState = 'default';
  private someToken: string;

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this.getData();
  }
  
  public getData ():void {
    this.base = this._dataService.getClientBase();
    this.sortData();
  }

  public sortData ():void {
     this.clientBase = this.base.sortClientBase();
  }

  public addClientBase(newClient: Client): void {
    this.clientBase = this.base.addClient(newClient);
    this._dataService.setClientBase(this.base);
  }

  public deleteClientBase(id: number): void {
    this.clientBase = this.base.deleteClient(id);
    this._dataService.setClientBase(this.base);
  }

  public editeClientBase (id: number): void {
    this.editeClient = this.base.findClient(id);
    this.toggleFormState = 'edite';
  }

   public updateClientBase(updates: string[]): void {

     for (let index = 0; index < this.base.getClientBase.length; index++) {
        if (this.base.getClientBase[index].getId === this.editeClient.getId){
          this.base.getClientBase[index].setName = updates[0];
          this.base.getClientBase[index].setPhone = updates[1];
          this.base.getClientBase[index].setAddress = updates[2];
          this.base.getClientBase[index].setEmail = updates[3];
     }
   }
     this._dataService.setClientBase(this.base);
  }

   public toggleForm (toggle: string): void {
        this.toggleFormState = toggle;
   }
}
