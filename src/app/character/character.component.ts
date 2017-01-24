import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Profile } from '../profile.model';
import { Router } from '@angular/router';
import { Question } from '../question.model';
import { QuestionService } from '../question.service';

@Component({
  selector: 'character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
  providers: [ProfileService, QuestionService]
})
export class CharacterComponent implements OnInit {

  constructor(private router: Router, private profileService: ProfileService, private questionService: QuestionService) { }
    userProfile: Profile[];
    questions: Question[];
  ngOnInit() {
    this.userProfile = this.profileService.getProfiles();
    this.questions = this.questionService.getQuestions();
  }
  updateName() {
    var newName : string = document.getElementById("name").innerHTML;
    this.userProfile[0].name = newName;
  }
  setCharacter(character){
    this.userProfile[0].character = character;
    this.router.navigate(['ohayocon', this.userProfile[0].character, this.questions[0].id]);
  }
}
