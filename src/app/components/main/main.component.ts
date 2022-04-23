import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/services/service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    public jobs: any[] = [];

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
        this.service.getJobList().subscribe(jobs => {
            this.jobs = jobs;
            console.log(jobs);
        });
    }
}
