import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CreateJob } from "src/app/model/create-job";
import { JobForm } from "src/app/model/job-form";
import { Service } from "src/app/services/service";

@Component({
    selector: 'app-create-job',
    templateUrl: './create-job.component.html',
    styleUrls: ['./create-job.component.css']
  })
  export class CreateJobComponent implements OnInit {
    job: JobForm = new JobForm();
  
    constructor(
      private service: Service,
      private router: Router
    ) { }
  
    ngOnInit(): void {
    }

    isAdvertiser() {
        return sessionStorage.getItem('type') === 'hirdeto';
    }

    createJob(): void {
      const userIdFromSession: string | null =  sessionStorage.getItem('userID');
      if (userIdFromSession) {
        const userId: number = parseInt(userIdFromSession);
        const createJob: CreateJob = new CreateJob(this.job.name, this.job.description, userId, this.job.place);
        this.service.createJob(createJob).subscribe(bool => {
          if (bool) {
            this.router.navigate(['/jobs']);
          }
        });
      }
    }
  }