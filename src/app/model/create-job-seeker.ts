export class CreateJobSeeker {
    public username: string;
    public password: string;
    public name: string;
    public education: string;
    public dateOfBirth: Date;
    public language: string;
    public email: string;
    public address: string;
    public phone: string;

    constructor(
        username: string,
        password: string,
        name: string,
        education: string,
        dateOfBirth: Date,
        language: string,
        email: string,
        address: string,
        phone: string
    ) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.education = education;
        this.dateOfBirth = dateOfBirth;
        this.language = language;
        this.email = email;
        this.address = address;
        this.phone = phone;
    }
}