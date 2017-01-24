import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Question } from '../question.model';
import { Router } from '@angular/router';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css'],
  providers: [QuestionService]
})
export class QuestionDetailsComponent implements OnInit {
  questionId: number;
  questionToDisplay: Question;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private questionService: QuestionService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.questionId = parseInt(urlParameters['id']);
    });
    this.questionToDisplay = this.questionService.getQuestionById(this.questionId);
  }
  goToNewRoute(clickedRoute) {
    this.router.navigate(['details', clickedRoute]);
    this.route.params.forEach((urlParameters) => {
      this.questionId = parseInt(urlParameters['id']);
      this.questionToDisplay = this.questionService.getQuestionById(this.questionId);
    });
  }

}
