import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data-base',
  templateUrl: './data-base.component.html',
  styleUrls: ['./data-base.component.css']
})
export class DataBaseComponent implements OnInit {

  public name: string; oldName: string;
  public address: string; oldAddress: string;
  public phone: string; oldPhone: string;
  public email: string; oldEmail: string;
  public dataBase: Client [] = [];
  public newClient: Client;
  public searchArray: Client [] = [];
  public searchName: string;
  public searchState = 'default';
  public editeState = 'default';

  constructor(private _dataService: DataService) {}

  ngOnInit() {
     let temp = this._dataService.getDatas();

     this.dataBase = temp.sort(function (ClientA, ClientB) {
                     if (ClientA.name > ClientB.name) { return 1; }
                     if (ClientA.name < ClientB.name) { return -1; }
                     return 0;
  });
  }

 public addClient() {
    this.newClient = new Client(this.name, this.address, this.phone, this.email)
    this.dataBase.push(this.newClient);
    this._dataService.addClient(this.newClient);
  }

  public deleteClient(deleteName: string){ 
     this.dataBase = this.dataBase.filter(client => client.name != deleteName);
     this.searchArray = this.searchArray.filter(client => client.name != deleteName);
     this._dataService.deleteClient(deleteName);
  }

  public editeClient(editeClient: Client) {
      this.editeState = 'edite';

      this.oldName = editeClient.name;
      this.name = editeClient.name;

      this.oldAddress = editeClient.address;
      this.address = editeClient.address;

      this.oldPhone = editeClient.phone;
      this.phone = editeClient.phone;

      this.oldEmail = editeClient.email;
      this.email = editeClient.email;
  }

  public finishEdite () {
    this.editeState = 'default';
    this.name = '';
    this.address = '';
    this.phone = '';
    this.email = '';
  }

  public updateClient() {

      for (let i = 0; i < this.dataBase.length; i++){
         if (this.dataBase[i].name === this.oldName && this.dataBase[i].address === this.oldAddress
             && this.dataBase[i].phone === this.oldPhone && this.dataBase[i].email === this.oldEmail ) {
               this.dataBase[i].name = this.name;
               this.dataBase[i].address = this.address;
               this.dataBase[i].phone = this.phone;
               this.dataBase[i].email = this.email;
               }
       }
       this._dataService.updateClient(this.oldName, this.oldAddress, this.oldPhone, this.oldEmail,
                                      this.name, this.address, this.phone, this.email);
  }

  public searchClient() {
    this.searchState = 'search';
    this.searchArray = [];
    this.dataBase.forEach( client => {if (client.name == this.searchName) {this.searchArray.push(client); }; });
  }

  public returnBase() {
    this.searchState = 'default';
  }

  public clearClient() {
    this.name = '';
    this.address = '';
    this.phone = '';
    this.email = '';
  }
}
