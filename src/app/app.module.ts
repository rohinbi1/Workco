import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './tasks/task/task.component';
import { FormsModule } from '@angular/forms';
import { NewTaskComponent } from './tasks/new-task/new-task.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TasksComponent,
    TaskComponent,
    NewTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
