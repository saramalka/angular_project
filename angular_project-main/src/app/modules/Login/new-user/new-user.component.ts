import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../service/userService';
import { User } from '../../../domain/user';


@Component({
  selector: 'app-new-user',
  standalone: false,

  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent {
  user: User ={
    password: ''
  }
  
  constructor(private _userService: UserService) {

  }
  "registerForm": FormGroup = new FormGroup({
    "userName": new FormControl("", Validators.required),
    "email": new FormControl("",Validators.email),
    "phone": new FormControl("", [Validators.minLength(9), Validators.maxLength(10)]),
    "password": new FormControl("", [Validators.minLength(8)])

  })
  onRegister() {
    this.user = this.registerForm.value
    this._userService.post(this.user).subscribe(data=>{
      if(data)
        console.log(`add user successful ${this.user}`)
    },
  err=>{
    console.log(`error to add user ${err}`)
  })
  }
}
