import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from 'app/client';

@Component({
  selector: 'app-form-update',
  templateUrl: './app-form-update.component.html',
  styleUrls: ['./app-form-update.component.css']
})
export class FormUpdateComponent implements OnInit {

  public updateName: string;
  public updatePhone: string;
  public updateAddress: string;
  public updateEmail: string;

  @Input()
  editeClientForm: Client;
  @Output()
  updatesClientFormUpdate = new EventEmitter <string []> ();
  @Output()
  toglleOff = new EventEmitter <string> ();
  
  public inValid = false;
  public valid = false;
  public hiddenAttention = true;
  public showAttention = false;

  constructor() { }

  ngOnInit() {
  }

  public updateClient(name: string, phone: string, address: string, email: string): void {

     if (this.validName(name)){

       let updatesClient: string [] = [];
       for (let i = 0; i < arguments.length; i++){
          updatesClient.push(arguments[i]);
     }
          this.updatesClientFormUpdate.emit(updatesClient);
          updatesClient = [];
     }
    }

    public validName (name:string): boolean {

       if (name === undefined || name.length <= 0) {
           this.inValid = true;
           this.valid = false;
           this.showAttention = true;
           return false;
        } else {
           this.inValid = false;
           this.valid = true;
           this.showAttention = false;
        }
         return true;
    }

  public finishEdite(): void {
    this.toglleOff.emit('default');
    this.valid = false;
    this.inValid = false;
    this.hiddenAttention = true;
    this. showAttention = false;
  }
}
