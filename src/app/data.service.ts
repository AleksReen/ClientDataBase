import { Injectable } from '@angular/core';
import { Base } from './base';

@Injectable()
export class DataService {

private KEY = 'ClientDataBase';

constructor() {}

    public setClientBase(tb: Base): void {
    localStorage.setItem(this.KEY, JSON.stringify(Base.toJson(tb)));
  }

 public getClientBase ():Base  {

      let data = localStorage.getItem(this.KEY)
      if(data !== null) {
        return Base.fromJson(JSON.parse(data));
      } else {
        let newBase: Base = new Base ();
        localStorage.setItem(this.KEY, JSON.stringify(Base.toJson(newBase)));
        return newBase;
    }
  }
}
