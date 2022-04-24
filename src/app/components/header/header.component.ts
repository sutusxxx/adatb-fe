import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Service } from 'src/app/services/service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();

  constructor(
    private router: Router,
    public service: Service
  ) { }

  ngOnInit(): void {
  }

  
  logout(): void {
    this.service.logout();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}