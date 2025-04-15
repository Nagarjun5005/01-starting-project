import { Component, EventEmitter, Input, Output} from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';


//genetrate random number from user ---global declarartion

const randomNumber = Math.floor(Math.random() * 5) + 1;
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //  @Input ({required:true}) id!:string;
  //  @Input({required:true}) avatar!:string;
  //  @Input({required:true}) name!:string;
   //we will convert this input into a object
   @Input({required:true}) user!:{
      id:string;
      avatar:string;
      name:string;
   }
   @Output ()select=new EventEmitter<string>();

  //  get imagePath(){
  //   return 'assets/users/'+this.avatar;
  //  }
  get imagePath(){
    return 'assets/users/'+this.user.avatar;
   }
  //  onSelectUser(){
  //     this.select.emit(this.id);
  //  }
  onSelectUser(){
    this.select.emit(this.user.id);
 }

 
}
