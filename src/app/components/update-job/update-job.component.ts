import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UpdateJob } from "src/app/model/update-job";
import { Service } from "src/app/services/service";

@Component({
    selector: 'app-update-job',
    templateUrl: './update-job.component.html',
    styleUrls: ['./update-job.component.css']
  })
  export class UpdateJobComponent implements OnInit {
    public job: UpdateJob | undefined;
  
    constructor(
      private service: Service,
      private route: ActivatedRoute
    ) { }
  
    ngOnInit(): void {
      const param = this.route.snapshot.paramMap.get('id');
      if (param) {
        let id = parseInt(param);
        this.getJob(id);
      }
    }

    getJob(id: number) {
      this.service.getJob(id).subscribe(job => 
        this.job = new UpdateJob(job.id, job.name, job.description, job.place, ''));
    }

    isAdvertiser() {
        return sessionStorage.getItem('type') === 'hirdeto';
    }

    update(): void {
        console.log(this.job);
        if (this.job) {
          this.service.updateJob(this.job).subscribe(bool => {
            if (bool) {
              console.log("siker");
            }
          });
        }
    }
  }