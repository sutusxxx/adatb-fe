import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
  })
export class SettingsComponent implements OnInit {

    applications: any[] = [];

    constructor() {}

    ngOnInit(): void {
        
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