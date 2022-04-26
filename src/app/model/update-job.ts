export class UpdateJob {
    public id: number;
    public name: string;
    public description: string;
    public place: string;
    public workType: string;

    constructor(
        id: number,
        name: string,
        description: string,
        place: string,
        workType: string,
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.place = place;
        this.workType = workType;
    }
}