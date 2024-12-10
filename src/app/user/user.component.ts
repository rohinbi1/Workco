import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';
import { type User } from './user.model';
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// type User={
//   id:string;
//  name:string;
//  avatar:string;
// }

// interface User{
//   id:string;
//  name:string;
//  avatar:string;
// }
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})

export class UserComponent {
  // selectedUser = DUMMY_USERS[randomIndex];
@Input() selectedUser!:boolean;
  get imagePath() {
    return 'assets/' + this.user.avatar;
  }
  @Input() user!:User;
  @Output() selectUser = new EventEmitter();
  onSlectUser() {
    this.selectUser.emit(this.user.id);
  }
}
