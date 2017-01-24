import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile.model';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-ohayocon1',
  templateUrl: './ohayocon1.component.html',
  styleUrls: ['./ohayocon1.component.css'],
  providers: [ProfileService]

})
export class Ohayocon1Component implements OnInit {

  constructor(private profileService: ProfileService) { }
    userProfile: Profile[];

  ngOnInit() {
    this.userProfile = this.profileService.getProfiles();
  }

}
