import { Advertiser } from "./advertiser";

export class AdvertiserForm {
    public username: string;
    public email: string;
    public phone: string;
    public name: string;
    public companyName?: string;
    public companyPhone?: string;
    public companyEmail?: string;
    public zipCode?: number;
    public city?: string;
    public street?: string;
    public houseNumber?: number;
    public county?: string;

    constructor(advertiser: Advertiser) {
        this.username = advertiser.username;
        this.email = advertiser.email;
        this.phone = advertiser.phone;
        this.name = advertiser.name;
        if (advertiser.company) {
            this.companyName = advertiser.company.name;
            this.companyPhone = advertiser.company.phone;
            this.companyEmail = advertiser.company.email;
            if (advertiser.company.hq) {
                this.zipCode = advertiser.company.hq.zipCode;
                this.city = advertiser.company.hq.city;
                this.street = advertiser.company.hq.street;
                this.houseNumber = advertiser.company.hq.houseNumber;
                this.county = advertiser.company.hq.county;
            }
        }
    }
}