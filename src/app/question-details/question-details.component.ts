import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Question } from '../question.model';
import { QuestionService } from '../question.service';
import { Profile } from '../profile.model';
import { ProfileService } from '../profile.service';
@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css'],
  providers: [QuestionService, ProfileService]
})
export class QuestionDetailsComponent implements OnInit {
  questionId: number;
  questionToDisplay: Question;
  userProfile: Profile[];

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private questionService: QuestionService, private profileService: ProfileService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.questionId = parseInt(urlParameters['id']);
    });
    this.userProfile = this.profileService.getProfiles();
    this.questionToDisplay = this.questionService.getQuestionById(this.questionId);
  }
  goToNewRoute(clickedRoute) {
    this.router.navigate(['details', clickedRoute]);
    this.route.params.forEach((urlParameters) => {
      this.questionId = parseInt(urlParameters['id']);
      this.questionToDisplay = this.questionService.getQuestionById(this.questionId);
      console.log(this.userProfile);
      if(this.questionId === 4){
        this.userProfile[0].key = true;
      }
      if(this.questionId === 18){
        this.userProfile[0].paperclip = true;
      }
      if(this.questionId === 14){
        this.userProfile[0].password = true;
      }
      if(this.userProfile[0].key === true && this.userProfile[0].paperclip === true && this.userProfile[0].password === true) {
        alert('Winner!');
      }
    });


  }

}
