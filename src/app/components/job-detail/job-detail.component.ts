import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/services/service';
import { ActivatedRoute } from '@angular/router';
import { JobDetails } from 'src/app/model/job-details';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {

  public jobDetails: JobDetails | null = null;

  constructor(
    private service: Service,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      let id = parseInt(param);
      this.setJobDetails(id);
    }
  }

  async setJobDetails(id: number): Promise<void> {
    if (id) {
      await this.service.getJob(id).subscribe(res => {
        console.log(res);
        this.jobDetails = res;
      });
    }
  }
}
