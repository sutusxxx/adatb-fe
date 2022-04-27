import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateJobComponent } from './components/create-job/create-job.component';
import { CreateCVComponent } from './components/create-cv/create-cv.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { UpdateJobComponent } from './components/update-job/update-job.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: '/jobs', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'jobs', component: MainComponent },
  { path: 'jobs/:id', component: JobDetailComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'create', component: CreateJobComponent },
  { path: 'createCV', component: CreateCVComponent },
  { path: 'update/:id', component: UpdateJobComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,
                                  MainComponent,
                                  JobDetailComponent,
                                  RegistrationComponent,
                                  CreateJobComponent,
                                  CreateCVComponent,
                                  UpdateJobComponent,
                                  SettingsComponent]
