import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  // selectedUser = DUMMY_USERS[randomIndex];

  get imagePath() {
    return 'assets/' + this.avatar;
  }
  // get imagePath() {
  //   return 'assets/' + this.selectedUser.avatar;
  // }
  // onSlectUser(){
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser = DUMMY_USERS[randomIndex];
  //   console.log('log');
  // }
  @Input() id!: string;
  @Input() avatar!: string;
  @Input() name!: string;
  @Output() selectUser = new EventEmitter();
  onSlectUser() {
    this.selectUser.emit(this.id);
  }
}
