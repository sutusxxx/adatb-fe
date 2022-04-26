import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/services/service';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      let id = parseInt(param);
      this.setJobDetails(id);
    }
  }

  delete(): void {
    const sessionUserId: string | null = sessionStorage.getItem('userID');
    if (sessionUserId && this.jobDetails) {
      const userId: number = parseInt(sessionUserId);
      this.service.deleteJob(this.jobDetails.id, userId).subscribe(bool => {
        if (bool) {
          this.router.navigate(['/jobs']);
        }
      });
    }
  }

  apply(): void {
    const sessionUserId: string | null = sessionStorage.getItem('userID');
    if (sessionUserId && this.jobDetails) {
      const userId: number = parseInt(sessionUserId);
      this.service.applyJob(this.jobDetails.id, userId).subscribe(bool => {
        if (bool) {
          console.log("siker");
        }
      });
    }
  }

  update(): void {
    this.router.navigate(['/update', this.jobDetails?.id]);
  }

  async setJobDetails(id: number): Promise<void> {
    if (id) {
      await this.service.getJobDetails(id).subscribe(res => {
        console.log(res);
        this.jobDetails = res;
      });
    }
  }

  isUserJobSeeker(): boolean {
    return sessionStorage.getItem('type') === 'allaskereso';
  }

  isUserAdvertiser(): boolean {
    return sessionStorage.getItem('type') === 'hirdeto';
  }

  canModify(): boolean {
    const sessionId: string | null = sessionStorage.getItem('userID');
    if (sessionId && this.jobDetails) {
      const userId: number = parseInt(sessionId);
      return sessionStorage.getItem('type') === 'hirdeto' && userId === this.jobDetails.advertiserId;
    }
    return false;
  }
}
