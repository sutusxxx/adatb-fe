export class Job {
    public id: number;
    public name: string;
    public description: string;
    public advertiserId: string;
    public place: string;

    constructor(
        id: number,
        name: string,
        description: string,
        advertiserId: string,
        place: string
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.advertiserId = advertiserId;
        this.place = place;
    }
}