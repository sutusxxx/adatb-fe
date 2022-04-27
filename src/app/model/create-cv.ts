export class CreateCV {
    public introduction: string;
    public experience: string;
    public motivation: string;
    public jobSeekerId: number;

    constructor(introduction: string, experience: string, motivation: string, jobSeekerId: number) {
        this.introduction = introduction;
        this.experience = experience;
        this.motivation = motivation;
        this.jobSeekerId = jobSeekerId;
    }
}