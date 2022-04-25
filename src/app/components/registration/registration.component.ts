import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
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