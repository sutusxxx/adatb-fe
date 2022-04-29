import { Company } from "./company";

export class Advertiser {
    public id!: number;
    public username!: string;
    public password!: string;
    public email!: string;
    public phone!: string;
    public name!: string;
    public company!: Company;
}