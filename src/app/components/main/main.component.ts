import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/services/service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    jobs = [{ id: 1, name: 'munka1' }, { id: 2, name: 'munka2' }];

    constructor(
        private router: Router,
        private service: Service
    ) { }

    ngOnInit(): void {
        // this.jobs = this.service.getJobList();
    }

    onSelect(job: any) {
        this.router.navigate(['/job', job.id]);
    }
}
