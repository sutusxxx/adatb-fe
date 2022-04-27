import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CreateCV } from "src/app/model/create-cv";
import { CVForm } from "src/app/model/cv-form";
import { Service } from "src/app/services/service";

@Component({
  selector: 'app-create-cv',
  templateUrl: './create-cv.component.html',
  styleUrls: ['./create-cv.component.css']
})
export class CreateCVComponent implements OnInit {
  cv: CVForm = new CVForm();

  constructor(
    private service: Service,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  isUserJobSeeker() {
    return sessionStorage.getItem('type') === 'allaskereso';
  }

  createCV(): void {
    const userIdFromSession: string | null = sessionStorage.getItem('userID');
    let userId: number | null = userIdFromSession ? parseInt(userIdFromSession) : null;
    if (userId) {
      const createCV: CreateCV = new CreateCV(this.cv.introduction, this.cv.experience, this.cv.motivation, userId);
      this.service.createCV(createCV).subscribe(bool => {
        if (bool) {
          this.router.navigate(['/createCV']);
        }
      });
    }
  }
}