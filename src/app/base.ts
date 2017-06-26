import { Client } from './client';


export class Base {

    private _clientBase: Client [] = [
        // only for TEST
        new Client(
            'ЗАО "Полимир"', 
            '78-58-98, +375(44)705-45-01', 
            'Могилёв, пр-кт Димитрова 78, рампа №3', 
            'polymir@tut.by', 
            1),
        new Client(
            'ИП Алекперов К.А',
            '+375(29)331-85-74',
            'Могилёв, пр-кт Мира 37, оф.12',
            'player191@rambler.ru', 
            2),
        new Client(
            'ИП Коршуков В.А.', 
            '+375(44)779-68-51', 
            'Могилёв, Первомайска 191', 
            'mag.Stroy@yandex.ru', 
            3),
        new Client(
            'ОДО "Восток-М"', 
            '25-78-96, +375(29)778-98-52', 
            'Могилёв, ул.Профсоюзная, оф. 214', 
            'vostok-m@yandex.by', 
            4),
        new Client(
            'ЧУП "Иоанн-Купец"', 
            '+375(29)331-26-46', 
            'Горки, Комсомольская 81, м-н "Зотчий"', 
            'vitaliy-kypec@tut.by', 
            5)
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
