import { Component, inject, Input } from '@angular/core';
import { TaskService } from './task/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  @Input() name!: string;
  @Input() userId!: string;

  isAdding = false;

  // constructor(private taskService: TaskService) {}
  private taskService=inject(TaskService);

  get selectUserTask() {
    return this.taskService.getSelectUserTask(this.userId); 
  }

  // onComplete(id: string) {
  //   this.taskService.onComplete(id); 
  // }

  addTask() {
    this.isAdding = true;
  }

  onCancelTask() {
    this.isAdding = false;
  }
}
