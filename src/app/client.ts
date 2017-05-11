export class Client {
    public name: string;
    public address: string;
    public phone: string;
    public email: string;

    constructor(name: string, address: string, phone: string, email: string) {
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }
}
