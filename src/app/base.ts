import { Client } from './client';


export class Base {

    private _clientBase: Client [] = [
        // only for TEST
        new Client('test', 'test', 'test', 'test', 1),
        new Client('test', 'test', 'test', 'test', 2),
        new Client('test', 'test', 'test', 'test', 3),
        new Client('test', 'test', 'test', 'test', 4),
        new Client('test', 'test', 'test', 'test', 5),
        new Client('test', 'test', 'test', 'test', 6),
        new Client('test', 'test', 'test', 'test', 7),
        new Client('test', 'test', 'test', 'test', 8),
        new Client('test', 'test', 'test', 'test', 9),
        new Client('test', 'test', 'test', 'test', 10),
        new Client('test', 'test', 'test', 'test', 11),
        new Client('test', 'test', 'test', 'test', 12),
        new Client('test', 'test', 'test', 'test', 13),
        new Client('test', 'test', 'test', 'test', 14),
        new Client('test', 'test', 'test', 'test', 15),
        new Client('test', 'test', 'test', 'test', 16),
        new Client('test', 'test', 'test', 'test', 17),
        new Client('test', 'test', 'test', 'test', 18),
        new Client('test', 'test', 'test', 'test', 19),
        new Client('test', 'test', 'test', 'test', 20)
    ];

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
