import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CV } from 'src/app/model/cv';
import { Job } from 'src/app/model/job';
import { Service } from 'src/app/services/service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    public jobs: Job[] = [];
    public cvs: CV[] = [];

    constructor(
        private router: Router,
        private service: Service
    ) { }

    ngOnInit(): void {
        this.initJobs();
    }

    onSelect(job: any) {
        this.router.navigate(['/jobs', job.id]);
    }

    initJobs() {
        if (this.service.isUserAdvertiser()) {
            const userIdFromSession: string | null = sessionStorage.getItem('userID');
            if (userIdFromSession) {
                const userId: number = parseInt(userIdFromSession);
                this.service.getJobListForAdvertiser(userId).subscribe(jobs => {
                    this.jobs = jobs;
                });
            }
        } else {
            this.service.getJobList().subscribe(jobs => {
                this.jobs = jobs;
            });
        }

    }
}
