import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/services/service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {

  public jobDetails: any;

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

  setJobDetails(id: number): void {
    if (id) {
      this.jobDetails = this.service.getJob(id);
    }
  }
}
