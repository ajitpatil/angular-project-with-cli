import { Component, Input, OnInit } from '@angular/core';
import {User} from '../shared/models/user';

@Component({
  selector: 'user-profile',
  templateUrl: 'user-profile.component.html',
})
export class UserProfileComponent implements OnInit {
  @Input() user : User;
  constructor() {  }

  ngOnInit() {}
}
