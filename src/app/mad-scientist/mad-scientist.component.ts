import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Profile } from '../profile.model';

@Component({
  selector: 'mad-scientist',
  templateUrl: './mad-scientist.component.html',
  styleUrls: ['./mad-scientist.component.css'],
  providers: [ProfileService]
})
export class MadScientistComponent implements OnInit {

  constructor(private profileService: ProfileService) { }
  userProfile: Profile[];

  ngOnInit() {
    this.userProfile = this.profileService.getProfiles();
    this.userProfile[0].scientist = true;
    this.userProfile[0].ohayocon = false;
    console.log(this.userProfile[0].ohayocon);
  }

}
