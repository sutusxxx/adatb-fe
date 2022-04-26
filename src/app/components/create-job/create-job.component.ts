import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Service } from "src/app/services/service";

@Component({
    selector: 'app-create-job',
    templateUrl: './create-job.component.html',
    styleUrls: ['./create-job.component.css']
  })
  export class CreateJobComponent implements OnInit {
    job: any = {name: '', description: '', place: ''};
  
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
        console.log(this.job);
        this.service.createJob(this.job).subscribe(bool => {
          if (bool) {
            this.router.navigate(['/jobs']);
          }
        });
    }
  }