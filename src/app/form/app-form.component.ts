import { Client } from './../client';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.css']
})
export class FormComponent implements OnInit {

  @Output()
  createClientForm = new EventEmitter <Client> ();
  @Input()
  editeClientForm: Client;
  @Input()
  toggleForm: string;
  @Output()
  updatesClientForm = new EventEmitter <string []> ();
  @Output()
  toglleOff = new EventEmitter <string> ();

  constructor() {}

  ngOnInit() {}

  public createClient(client: Client): void {
        this.createClientForm.emit(client);
    }

  public updateClient(updatesClient: string []) {
        this.updatesClientForm.emit(updatesClient);
    }

  public finishEdite(toggle: string): void {
        if(toggle === 'default' ) {
        this.toglleOff.emit(toggle);
        } else {
        throw new Error ('Incorrect command, finish edition!!!');
    }
  }
}
