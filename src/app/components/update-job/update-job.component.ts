import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { JobForm } from "src/app/model/job-form";
import { UpdateJob } from "src/app/model/update-job";
import { Service } from "src/app/services/service";

@Component({
  selector: 'app-update-job',
  templateUrl: './update-job.component.html',
  styleUrls: ['./update-job.component.css']
})
export class UpdateJobComponent implements OnInit {
  public jobId: number = 0;
  public job: JobForm | null = null;

  constructor(
    private service: Service,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      let id: number = parseInt(param);
      this.getJob(id);
    }
  }

  getJob(id: number): void {
    this.service.getJob(id).subscribe(job =>
      this.job = new JobForm(job.name, job.description, job.place));
  }

  isAdvertiser(): boolean {
    return sessionStorage.getItem('type') === 'hirdeto';
  }

  update(): void {
    if (this.job) {
      const updateJob: UpdateJob = new UpdateJob(
        this.jobId,
        this.job.name,
        this.job.description,
        this.job.place,
        ''
      );
      this.service.updateJob(updateJob).subscribe(bool => {
        if (bool) {
          console.log("siker");
        }
      });
    }
  }
}