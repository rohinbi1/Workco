import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'workCo';
  users = DUMMY_USERS;
 
  selectedUserId:string='' ;
  onSlectUser(id: any) {
    this.selectedUserId=id
    console.log('WorkCo' + id);
  }
  
  get selectedUser() {
    return this.users.find((user) =>
      user.id === this.selectedUserId
    )!;
  }
  
}
