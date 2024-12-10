import { Injectable } from "@angular/core";
@Injectable({providedIn: 'root'})
export class TaskService {
constructor(){
    const tasks= localStorage.getItem('tasks')
if(tasks){
    this.tasks=JSON.parse(tasks);
}
}
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
    
  ];
  
  getSelectUserTask(userId: any) {
    return this.tasks.filter((task) => task.userId === userId);

  }
  onComplete(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTask();
  }
  private saveTask(){
    localStorage.setItem('tasks',JSON.stringify(this.tasks));
  }
}
