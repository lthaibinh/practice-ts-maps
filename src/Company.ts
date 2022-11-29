import { faker } from "@faker-js/faker";


export class Company {
    companyName: string;
    catchPhrase: string;
    localtion: {
        lat: number;
        lng: number;
    }
    constructor(){
        this.companyName = faker.name.firstName();
        this.catchPhrase = faker.company.catchPhrase();
        this.localtion = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
}