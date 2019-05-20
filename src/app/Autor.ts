import { IAutores } from './IAutores';

export class Autor implements IAutores {
    id: number;
    name: string;
    mail: string;
    username: string;
    address: { street: string; suite: string; city: string; geo: { lat: string; lng: string; }; };
    phone: string;
    website: string;
    company: { name: { catchPhrase: string; bs: string; }; };

    constructor
    (
        name: string,
        mail: string,
        username: string,
        id: number
    ) {
        this.name = name;
        this.id = id;
        this.mail = mail;
        this.username = username;
    }
}
