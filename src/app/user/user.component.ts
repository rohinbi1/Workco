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
  // get imagePath() {
  //   return 'assets/' + this.selectedUser.avatar;
  // }
  // onSlectUser(){
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser = DUMMY_USERS[randomIndex];
  //   console.log('log');
  // }
  // @Input() id!: string;
  // @Input() avatar!: string;
  // @Input() name!: string;
  // @Input() user!:{
  //   id:string;
  //   name:string;
  //   avatar:string;
  // }
  @Input() user!:User;
  @Output() selectUser = new EventEmitter();
  onSlectUser() {
    this.selectUser.emit(this.user.id);
  }
}
