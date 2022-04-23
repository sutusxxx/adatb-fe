import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/services/service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: any;

  constructor(
    private router: Router,
    private service: Service
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    this.service.login(this.user.username, this.user.password)
      .subscribe(user => {
          console.log("login");
      });
  }
}
