import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NgIf } from '@angular/common';
import { NewTaskData } from './task/task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,NewTaskComponent,NgIf],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) name!:string;
  @Input({required:true}) userId!:string;
  isAddingTask=false;

/*adding the dependency injection for TaskService

private taskService:TaskService;
constructor(taskService:TaskService){
   this.taskService=taskService;
}
   
*/
constructor(private taskService: TaskService) {}

  get selectedUserTasks(){
    return this.taskService.getUserTasks(this.userId);
  }

  onCompleteTask(id:string){
    console.log('Task to remove:', id);
    return this.taskService.removeTask(id);
  }

  onStartAddTask(){
      this.isAddingTask=true;
  }

  onCancelAddTask(){
    this.isAddingTask=false;
  }

  onAddTask(taskData:NewTaskData){
   this.taskService.addTask(taskData,this.userId);
    this.isAddingTask=false;
  }

}
