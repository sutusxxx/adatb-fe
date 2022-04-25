export class JobDetails {
    public id: number;
    public name: string;
    public description: string;
    public place: string;
    public companyName: string;
    public advertiserName: string;
    public advertiserEmail: string;
    public advertiserPhone: string;
    public workType: string[];

    constructor(
        id: number,
        name: string,
        description: string,
        place: string,
        companyName: string,
        advertiserName: string,
        advertiserEmail: string,
        advertiserPhone: string,
        workType: string[]
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.place = place;
        this.companyName = companyName;
        this.advertiserName = advertiserName;
        this.advertiserEmail = advertiserEmail;
        this.advertiserPhone = advertiserPhone;
        this.workType = workType;
    }
}
