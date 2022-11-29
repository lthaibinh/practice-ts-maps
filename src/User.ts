import { faker } from "@faker-js/faker";


export class User {
    name: string;
    localtion: {
        lat: number;
        lng: number;
    }
    constructor(){
        this.name = faker.name.firstName();
        this.localtion = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
}