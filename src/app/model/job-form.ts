export class JobForm {
    public name: string;
    public description: string;
    public place: string;

    constructor(name?: string, description?: string, place?: string) {
        this.name = name ? name : '';
        this.description = description ? description : '';
        this.place = place ? place : '';
    }
}