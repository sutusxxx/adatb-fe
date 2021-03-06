import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/services/service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public jobSeeker: any = {username: '', password: ''};
  public advertiser: any = {username: '', password: ''};

  constructor(
    private router: Router,
    private service: Service
  ) { }

  ngOnInit(): void {
    if (this.service.isUserLoggedIn()) {
      this.router.navigate(['http://localhost:4200/jobs']);
    }
  }

  loginJobSeeker(): void {
    this.service.loginJobSeeker(this.jobSeeker.username, this.jobSeeker.password)
      .subscribe(user => {
          this.service.setUser(user, 'allaskereso');
          this.router.navigate(['/jobs']);
      });
  }

  loginAdvertiser(): void {
    this.service.loginAdvertiser(this.advertiser.username, this.advertiser.password)
      .subscribe(user => {
        console.log(user);
          this.service.setUser(user, 'hirdeto');
          this.router.navigate(['/jobs']);
      });
  }
}
