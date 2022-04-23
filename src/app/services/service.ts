import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root',
   })
export class Service {
    private url: string = 'http://localhost:8081';
    constructor(private http: HttpClient) {}

    public getJobList(): Observable<any[]> {
        return this.http.get<any[]>(`${this.url}/jobs`);
    }

    public getJobListForAdvertiser(id: string): Observable<any[]> {
        const param = new HttpParams().set('id', id)
        return this.http.get<any[]>(`${this.url}/jobs`, {params: param});
    }

    public getJob(id: number): Observable<any> {
        return this.http.get<any>(`${this.url}/job/${id}`);
    }

    public login(username: string, password: string): Observable<any> {
        return of();
    }

    public deleteJob(id: number): Observable<any> {
        return of();
    }

    public createJob(job: any): Observable<any> {
        return of();
    }

    public applyJob(jobId: number, userId: string): Observable<any> {
        return of();
    }

    public uploadCV(cv: any): Observable<any> {
        return of();
    }
}