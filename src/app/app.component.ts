import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from '../dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { NgFor ,NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,UserComponent,TasksComponent,NgFor,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
    users=DUMMY_USERS;
    //this is for app-task component
    // selectedUserId='u1';
    selectedUserId?: string;
    // selectedUserId?:string;

    //this is for app-task component
    get selectedUser(){
      return this.users.find((user)=>user.id===this.selectedUserId)!;
      console.log(this.selectedUserId);
      console.log(this.selectedUser);
    }

    onSelectUser(id:string){
      console.log('selected user with id'+id);
      this.selectedUserId=id;
    }
}
