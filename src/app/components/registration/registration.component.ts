import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Service } from "src/app/services/service";

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
  })
  export class RegistrationComponent implements OnInit {

    user: any = {
        username: '',
        password: '',
        name: '',
        education: '',
        dateOfBirth: '',
        language: '',
        email: '',
        address: '',
        phone: ''
    };
    advertiser: any = {
        username: '',
        password: '',
        email: '',
        phone: '',
        name: ''
    };
  
    constructor(
      private service: Service,
      private router: Router
    ) { }
  
    ngOnInit(): void {
    }

    registrationForUser(): void {
        this.service.registerJobSeeker(this.user).subscribe(bool => {
          if (bool) {
            this.router.navigate(['/login']);
          }
        });
    }

    registrationForAdvertiser(): void {
        this.service.registerAdvertiser(this.advertiser).subscribe(bool => {
          if (bool) {
            this.router.navigate(['/login']);
          }
        });
    }
  }