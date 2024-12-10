import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TaskService } from './task.service';
interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task!:Task;
  @Output() complete =new EventEmitter<string>();
  private taskService=inject(TaskService)

  onComplete(){
    this.taskService.onComplete(this.task.id)
  }
}
