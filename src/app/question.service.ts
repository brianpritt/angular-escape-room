import { Injectable } from '@angular/core';
import { Question } from './question.model';
import { QUESTIONS } from './questions';

@Injectable()
export class QuestionService {

  constructor() { }
  getQuestions() {
    return QUESTIONS;
  }

  getQuestionById(questionId: number){
    for (var i = 0; i <= QUESTIONS.length-1; i++){
      if (QUESTIONS[i].id === questionId) {
        return QUESTIONS[i];
      }
    }
  }
}
