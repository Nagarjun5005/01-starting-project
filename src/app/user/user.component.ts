import { Component, EventEmitter, Input, Output} from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';
import {type User } from './user.model';

import { CardComponent } from '../shared/card/card.component';

//genetrate random number from user ---global declarartion

//using type for user

// type User={
//   id:string;  
//   avatar:string;
//   name:string;
// }



const randomNumber = Math.floor(Math.random() * 5) + 1;
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 
   @Input({required:true}) user!:User;
   @Output ()select=new EventEmitter<string>();
   @Input({required:true}) selected!:boolean;


  get imagePath(){
    return 'assets/users/'+this.user.avatar;
   }
 
  onSelectUser(){
    this.select.emit(this.user.id);
 }

 
}
