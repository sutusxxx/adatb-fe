export class Headquarters {
    private _id!: number;
    private _county!: string;
    private _city!: string;
    private _street!: string;
    private _houseNumber!: number;
    private _zipCode!: number;

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get zipCode(): number {
        return this._zipCode;
    }

    public set zipCode(value: number) {
        this._zipCode = value;
    }

    public get houseNumber(): number {
        return this._houseNumber;
    }

    public set houseNumber(value: number) {
        this._houseNumber = value;
    }

    public get street(): string {
        return this._street;
    }
    public set street(value: string) {
        this._street = value;
    }

    public get city(): string {
        return this._city;
    }

    public set city(value: string) {
        this._city = value;
    }

    public get county(): string {
        return this._county;
    }
    
    public set county(value: string) {
        this._county = value;
    }
}