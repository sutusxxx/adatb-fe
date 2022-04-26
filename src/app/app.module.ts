import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from './components/shared/shared.module';
import { MainComponent } from './components/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { JobDetailComponent } from './components/job-detail/job-detail.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './components/registration/registration.component';
import { CreateJobComponent } from './components/create-job/create-job.component';
import { UpdateJobComponent } from './components/update-job/update-job.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    JobDetailComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationComponent,
    CreateJobComponent,
    UpdateJobComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
