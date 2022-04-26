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

    public registerUser(user: any): Observable<void> {
        return this.http.post<void>(`${this.url}/registration/jobseeker`, 
        {
            username: user.username,
            password: user.password,
            name: user.name,
            education: user.education,
            dateOfBirth: user.dateOfBirth,
            language: user.language,
            email: user.email,
            address: user.address,
            phone: user.phone
        })
    }

    public registerAdvertiser(advertiser: any): Observable<void> {
        return this.http.post<void>(`${this.url}/registration/advertiser`, 
        {
            username: advertiser.username,
            password: advertiser.password,
            name: advertiser.name,
            email: advertiser.email,
            phone: advertiser.phone
        })
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
        const userId =  sessionStorage.getItem('userID');
        return this.http.post<any>(`${this.url}/jobs/create`, 
        {
            name: job.name,
            description: job.description,
            advertiserId: userId,
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
        return sessionStorage.getItem('userID') !== undefined && sessionStorage.getItem('userID') !== null;
    }

    public logout(): void {
        sessionStorage.clear();
    }
}