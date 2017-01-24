import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Profile } from '../profile.model';
import { Router } from '@angular/router';

@Component({
  selector: 'character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
  providers: [ProfileService]
})
export class CharacterComponent implements OnInit {

  constructor(private router: Router, private profileService: ProfileService) { }
    userProfile: Profile[];
  ngOnInit() {
    this.userProfile = this.profileService.getProfiles();
  }
  updateName() {
    var newName : string = document.getElementById("name").innerHTML;
    this.userProfile[0].name = newName;
  }
  setCharacter(character){
    this.userProfile[0].character = character;
    this.router.navigate(['ohayocon', this.userProfile[0].character, '1']);
  }
}
