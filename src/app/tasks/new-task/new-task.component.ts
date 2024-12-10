import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
})
export class NewTaskComponent {
  @Output() onCancel = new EventEmitter();
  @Output() add = new EventEmitter<{title:string;summary:string;dueDate:string}>();
  enterTitle: string = '';
  enterSummary: string = '';
  enterDueDate: string = '';

  onCancels() {
    this.onCancel.emit();
  }
  onSubmit() {
    this.add.emit({
  title:this.enterTitle,summary:this.enterSummary,dueDate:this.enterDueDate
    });
  }
}
