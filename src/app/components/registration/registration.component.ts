import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Service } from "src/app/services/service";

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
  })
  export class RegistrationComponent implements OnInit {

    user: any;
    advertiser: any;
  
    constructor(
      private service: Service,
      private route: ActivatedRoute
    ) { }
  
    ngOnInit(): void {
    }

    registrationForUser(): void {
        this.service.registerUser(this.user);
    }

    registrationForAdvertiser(): void {
        this.service.registerAdvertiser(this.advertiser);
    }
  }