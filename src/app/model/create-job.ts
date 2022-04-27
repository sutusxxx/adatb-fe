export class CreateJob {
    public name: string;
    public description: string;
    public advertiserId: number;
    public place: string;
    public workType?: string;

    constructor(name: string, description: string, advertiserId: number, place: string, workType?: string) {
        this.name = name;
        this.description = description;
        this.advertiserId = advertiserId;
        this.place = place;
        this.workType = workType;
    }
}