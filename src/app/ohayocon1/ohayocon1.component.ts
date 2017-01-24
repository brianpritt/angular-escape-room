import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile.model';
import { ProfileService } from '../profile.service';
import { Question } from '../question.model';
import { QuestionService } from '../question.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ohayocon1',
  templateUrl: './ohayocon1.component.html',
  styleUrls: ['./ohayocon1.component.css'],
  providers: [ProfileService, QuestionService]

})
export class Ohayocon1Component implements OnInit {
  questionId: number = null;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private profileService: ProfileService, private questionService: QuestionService) { }
    userProfile: Profile[];
    questions: Question[];
    question: Question;

  ngOnInit() {
    this.userProfile = this.profileService.getProfiles();
    this.questions = this.questionService.getQuestions();
    this.route.params.forEach((urlParametersArray) => {
      this.questionId = parseInt(urlParametersArray['id']);
    });
    this.question = this.questions[this.questionId - 1];
  }
  goToNewRoute(clickedRoute) {
    this.router.navigate(['details', clickedRoute]);
  }
}
