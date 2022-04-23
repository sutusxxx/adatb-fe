import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root',
   })
export class Service {
    constructor(private http: HttpClient) {}

    public getJobList(): Observable<any[]> {
        return of([{}]);
    }

    public getJob(id: number): Observable<any> {
        return of();
    }

    public login(username: string, password: string, type: string): Observable<any> {
        return of();
    }

    public deleteJob(id: number): Observable<any> {
        return of();
    }

    public createJob(job: any): Observable<any> {
        return of();
    }

    public applyJob(jobId: any): Observable<any> {
        return of();
    }

    public uploadCV(cv: any): Observable<any> {
        return of();
    }
}