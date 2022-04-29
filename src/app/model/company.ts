import { Headquarters } from "./headquarters";

export class Company {
    public id!: number;
    public name!: string;
    public phone!: string;
    public email!: string;
    public hq!: Headquarters
}