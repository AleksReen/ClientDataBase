import { Client } from './client';


export class Base {

    private _clientBase: Client [] = [];

     public static toJson(base: Base) {
        return {
            clientBase: base._clientBase.map( c => Client.toJson(c)),
        };
    }

    public static fromJson(json: any): any {
        let base = new Base();
        base._clientBase = json.clientBase.map(c => Client.fromJson(c));
        return base;
    }

    constructor() {}

    public set setClientBase (v: Client []){
        this._clientBase = v;
    }

    public get getClientBase (){
        return this._clientBase;
    }

    public addClient (newClient: Client): Client []{
        this._clientBase.push(newClient);
        return this._clientBase;
    }

    public deleteClient (id: number): Client [] {
        this._clientBase = this._clientBase.filter(client => client.getId != id)
        return this._clientBase;
    }

    public findClient (id: number): Client {
        let findClient;
        for (let i = 0; i < this._clientBase.length; i++){
            if (this._clientBase[i].getId === id){
                findClient = this._clientBase[i];
            }
        }
        return findClient;
    }

     public sortClientBase (): Client [] {
        this._clientBase.sort((clientA: Client, clientB: Client) => {
               if (clientA.getName > clientB.getName) {
                   return 1; }
               if (clientA.getName < clientB.getName) {
                   return -1; }
                return 0;
            }
        );
        return this._clientBase;
    }
}
