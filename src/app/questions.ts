import { Question } from './question.model';

export const QUESTIONS: Question[] =[
  new Question(1,"As a student of Japanese language and culture you've found yourself at Ohayocon. Upon arriving, you are promptly harrassed by a group of veteran cosplayers. Crying, you turn to find the door only to discover all the doors have disappeared. Alarmed you...", "Decide you might as well make the most of the experience and keep exploring","Set out to begin your escape", 2, 3),
  new Question(2,"Good choice, you decide to keep exploring despite the tears you have shed. You see a shiny object on the ground.","Pick up the shiny","Walk away", 4, 5),
  new Question(3,"You begin to run in the direction with the least amount of people, the wind wiping the tears from your eyes.  A man approaches you with bootleg Dragonball Z DVD's.","Talk to man","Knock them out of his hands and run", 6, 7),
  new Question(4,"You've found a shiny key! Maybe this key will be useful later. For now you put it in your pocked and feel slightly better about this miserable day.","Keep walking","Eat the key", 8, 9),
  new Question(5,"Shiny things are too mysterious for you. Instead, a man approaches you with bootleg Dragonball Z DVD's.","Talk to man","Knock them out of his hands and run", 6, 7),
  new Question(50,"Hello {{userProfile[0].name}}, as a {{userProfile[0].character}} of Firefly you've found yourself as an attendee of Ohayocon. You quickly realize upon your arrival that Nathan Fillion is nowhere in sight, and no one here has heard of Firefly. Disappointed, you turn to find the door only to discover all the doors have disappeared. Alarmed you...", "Decide you might as well make the most of the experience and keep exploring","Set out to begin your escape", 51, 52),
  new Question(51,"Good choice, you decide to keep exploring despite the lack of Nathan Fillion. You see a shiny object on the ground.","Pick up the shiny","Walk away", 54, 55),
  new Question(52,"You look around wildly for the nearest door. A man approaches you with bootleg Dragonball Z DVD's.","Talk to man","Knock them out of his hands and run", 56, 57),
]
