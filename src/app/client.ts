export class Client {

    private _id: number;
    private _name: string = '';
    private _address: string = '';
    private _phone: string = '';
    private _email: string = '';


    public static toJson(client: Client) {
        return {
            name: client.getName,
            phone: client.getPhone,
            address: client.getAddress,
            email: client.getEmail,
            id: client.getId,
        }
    }

    public static fromJson(client: any): Client {
        return new Client(client.name, client.phone, client.address, client.email, client.id);
    }

    constructor(name: string, phone: string, address: string, email: string, id?: number) {

        if (name === null || name === undefined){
           this._name = '';
        } else {
            this._name = name;
        }

        if (phone === null || phone === undefined){
            this._phone = '';
        } else {
            this._phone = phone;
        }

        if (address === null || address === undefined){
            this._address = '';
        } else {
            this._address = address;
        }

        if (email === null || email === undefined){
            this._email = '';
        } else {
            this._email = email;
        }

        if (id === null || id === undefined){
            this._id = Math.random();
        } else {
            this._id = id;
        }
    }


    public set setName(name: string) {
        this._name = name;
    }

    public set setPhone(phone: string) {
        this._phone = phone;
    }

    public set setAddress(address: string) {
        this._address = address;
    }

    public set setEmail(email: string) {
        this._email = email;
    }

     public get getId(): number {
        return this._id;
    }

    public get getName(): string {
        return this._name;
    }

    public get getPhone(): string {
        return this._phone;
    }

    public get getAddress(): string {
        return this._address;
    }

    public get getEmail(): string {
        return this._email;
    }
}
