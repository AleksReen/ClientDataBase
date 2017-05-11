import { Injectable } from '@angular/core';
import { Init } from '../app/init-database';

@Injectable()
export class DataService extends Init {

  constructor() {
    super();
    console.log('Data service ОК!');
    this.load();
   }

   public getDatas(){
     let dB = JSON.parse(localStorage.getItem('ClientDataBase'));
     return dB;
   }

   public addClient (newClient){
      let dB = JSON.parse(localStorage.getItem('ClientDataBase'));
      dB.push(newClient);
      localStorage.setItem('ClientDataBase', JSON.stringify(dB));
      console.log('service ADD');
   }

   public deleteClient(deleteName: string) {
     let dB = JSON.parse(localStorage.getItem('ClientDataBase'));
     dB = dB.filter(client => client.name != deleteName);
     localStorage.setItem('ClientDataBase', JSON.stringify(dB));
     console.log('service DELETE');
  }

   public updateClient(oldName, oldAddress, oldPhone, oldEmail, name, address, phone, email) {
     let dB = JSON.parse(localStorage.getItem('ClientDataBase'));

      for (let i = 0; i < dB.length; i++) {
         if (dB[i].name === oldName && dB[i].address === oldAddress && dB[i].phone === oldPhone && dB[i].email === oldEmail ) {
           dB[i].name = name;
           dB[i].address = address;
           dB[i].phone = phone;
           dB[i].email = email;
          }
       }
     localStorage.setItem('ClientDataBase', JSON.stringify(dB));
     console.log('service UDATE');
   }

}
