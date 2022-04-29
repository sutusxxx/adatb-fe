import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Advertiser } from "src/app/model/advertiser";
import { AdvertiserForm } from "src/app/model/advertiser-form";
import { Service } from "src/app/services/service";

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
  })
export class SettingsComponent implements OnInit {

    advertiser: AdvertiserForm | null = null;
    applications: any[] = [];

    constructor(
        private router: Router,
        private service: Service) {}

    ngOnInit(): void {
        const userType: string | null = sessionStorage.getItem('type');
        const userId: string | null = sessionStorage.getItem('userID');
        if (userType && userId) {

            switch(userType) {
                case 'hirdeto':
                    this.service.getAdvertiser(parseInt(userId))
                        .subscribe((response: Advertiser) => {
                            if (response) {
                                this.advertiser = new AdvertiserForm(response);
                            } else {
                                console.log('error');
                            }
                        });
            }
        } else {
            this.router.navigate(['/login']);
        }
    }

    isJobSeeker(): boolean {
        return sessionStorage.getItem('type') === 'allaskereso';
    }

    isAdvertiser(): boolean {
        return sessionStorage.getItem('type') === 'hirdeto';
    }

    isAdmin(): boolean {
        return false;
    }
}