import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, Subject } from "rxjs";
import { JobDetails } from "../model/job-details";

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

    public getJobList(): Observable<any[]> {
        return this.http.get<any[]>(`${this.url}/jobs`);
    }

    public getJobListForAdvertiser(id: string): Observable<any[]> {
        const param = new HttpParams().set('id', id)
        return this.http.get<any[]>(`${this.url}/jobs`, {params: param});
    }

    public getJob(id: number): Observable<JobDetails> {
        return this.http.get<JobDetails>(`${this.url}/job/${id}`);
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

    public deleteJob(jobId: number, userId: number): Observable<void> {
        const param = new HttpParams().set('job', jobId.toString()).set('user', userId.toString());
        return this.http.delete<void>(`${this.url}/job/delete`, {params: param});
    }

    public createJob(job: any): Observable<any> {
        return this.http.post<void>(`${this.url}/login/advertiser`, 
        {
            name: job.name,
            description: job.description,
            advertiserId: job.advertiserId,
            place: job.place
        });
    }

    public applyJob(jobId: number, userId: string): Observable<void> {
        const param = new HttpParams().set('job', jobId.toString()).set('user', userId.toString());
        return this.http.put<void>(`${this.url}/job/apply`, {params: param});
    }

    public uploadCV(cv: any): Observable<any> {
        return of();
    }

    public setUser(user: any, type: string): void {
        console.log(user);
        if (user) {
            sessionStorage.setItem('userID', user.id);
            sessionStorage.setItem('username', user.username);
            sessionStorage.setItem('type', type);
        }
    }

    public isUserLoggedIn(): boolean {
        const user = sessionStorage.getItem('username');
        return !(user === null);
    }

    public logout(): void {
        sessionStorage.clear();
    }
}