import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, Subject } from "rxjs";
import { CreateJobSeeker } from "../model/create-job-seeker";
import { Job } from "../model/job";
import { JobDetails } from "../model/job-details";
import { UpdateJob } from "../model/update-job";
import { CreateCV } from "../model/create-cv";
import { CreateJob } from "../model/create-job";

@Injectable({
    providedIn: 'root',
   })
export class Service {
    private url: string = 'http://localhost:8081';

    public user: any;
    public onSetUser: Subject<any> = new Subject<any>();

    constructor(private http: HttpClient) {
        this.user = sessionStorage.getItem('user');
    }

    public registerJobSeeker(user: any): Observable<boolean> {
        const jobSeeker: CreateJobSeeker = new CreateJobSeeker(
            user.username,
            user.password,
            user.name,
            user.education,
            user.dateOfBirth,
            user.language,
            user.email,
            user.address,
            user.phone
        )
        return this.http.post<boolean>(`${this.url}/registration/jobseeker`, jobSeeker);
    }

    public registerAdvertiser(advertiser: any): Observable<any> {
        return this.http.post<any>(`${this.url}/registration/advertiser`, 
        {
            username: advertiser.username,
            password: advertiser.password,
            name: advertiser.name,
            email: advertiser.email,
            phone: advertiser.phone
        })
    }

    public getJobList(): Observable<Job[]> {
        return this.http.get<Job[]>(`${this.url}/jobs`);
    }

    public getJobListForAdvertiser(id: number): Observable<any[]> {
        const idParam: string = id + '';
        console.log(idParam)
        const param = new HttpParams().set('id', idParam)
        return this.http.get<any[]>(`${this.url}/jobs`, {params: param});
    }

    public getJob(id: number): Observable<Job> {
        return this.http.get<Job>(`${this.url}/job/${id}`);
    }

    public getJobDetails(id: number): Observable<JobDetails> {
        return this.http.get<JobDetails>(`${this.url}/jobDetail/${id}`);
    }

    public loginJobSeeker(username: string, password: string): Observable<any> {
        return this.http.post<any>(`${this.url}/login/jobseeker`, 
        {
            username: username,
            password: password
        });
    }

    public loginAdvertiser(username: string, password: string): Observable<any> {
        return this.http.post<any>(`${this.url}/login/advertiser`, 
        {
            username: username,
            password: password
        });
    }

    public deleteJob(jobId: number, userId: number): Observable<boolean> {
        const param = new HttpParams().set('job', jobId.toString()).set('user', userId.toString());
        return this.http.delete<boolean>(`${this.url}/job/delete`, {params: param});
    }

    public createCV(cv: CreateCV): Observable<boolean> {
        return this.http.post<boolean>(`${this.url}/createCV`, cv);
    }

    public createJob(job: CreateJob): Observable<boolean> {
        return this.http.post<boolean>(`${this.url}/jobs/create`, job);
    }

    public updateJob(job: UpdateJob): Observable<boolean> {
        return this.http.post<boolean>(`${this.url}/jobs/update`, job);
    }

    public applyJob(jobId: number, userId: number): Observable<boolean> {
        console.log("eljut idáig?")
        const param = new HttpParams().set('job', jobId.toString()).set('user', userId.toString());
        return this.http.get<boolean>(`${this.url}/job/apply`, {params: param});
    }

    public setUser(user: any, type: string): void {
        if (user) {
            sessionStorage.setItem('userID', user.id);
            sessionStorage.setItem('username', user.username);
            sessionStorage.setItem('type', type);
        }
    }

    public isUserLoggedIn(): boolean {
        return sessionStorage.getItem('userID') !== undefined && sessionStorage.getItem('userID') !== null;
    }

    public logout(): void {
        sessionStorage.clear();
    }

    public isUserAdvertiser(): boolean {
        return sessionStorage.getItem('type') === 'hirdeto';
    }

    isUserJobSeeker(){
        return sessionStorage.getItem('type') === 'allaskereso';
      }
}