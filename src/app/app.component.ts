import { Component } from '@angular/core';
import {User} from './shared/models/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message : string = 'Hello!';
  users : User[] =[
  {
  	id: 25,
  	name: 'Ajit',
  	username:'ajanta'
  },
  {
  	id: 25,
  	name: 'Gopi',
  	username:'ramakrishnan'
  },
  {
  	id: 25,
  	name: 'Satish',
  	username:'sambasivan'
  }
  ];

  activeUser:User;

  selectUser(user:User){
  	this.activeUser=user;
  	console.log(this.activeUser);
  };
}
