export class CV {
    public id: number;
    public introduction: string;
    public expreience: string;
    public motivation: string;
    public jobseekerid: number;

    constructor(
        id: number,
        introduction: string,
        experience: string,
        motivation: string,
        jobseekerId: number
    ) {
        this.id = id;
        this.introduction = introduction;
        this.expreience = experience;
        this.motivation = motivation;
        this.jobseekerid = jobseekerId;
    }
}