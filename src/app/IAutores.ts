export interface IAutores {
    id: number;
    name: string;
    mail: string;
    username: string;
    address: {
        street: string;
        suite: string;
        city: string; 
        geo : {
          lat: string;
          lng: string;
        }
    };
    phone: string;
    website: string;
    company: {
      name: {
      catchPhrase: string;
      bs: string;
        }
    }
}