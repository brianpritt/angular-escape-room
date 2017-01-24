import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile.model';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-ohayocon',
  templateUrl: './ohayocon.component.html',
  styleUrls: ['./ohayocon.component.css'],
  providers: [ProfileService]
})
export class OhayoconComponent implements OnInit {

  constructor(private profileService: ProfileService) { }
    userProfile: Profile[];

    makeProfile(name: string, charater: string){
      // var newProfile: Profile = new Profile(name, character);
    }
  ngOnInit() {
    this.userProfile = this.profileService.getProfiles();
    this.userProfile[0].ohayocon = true;
    this.userProfile[0].scientist = false;
  }

}
