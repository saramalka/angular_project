import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';
import { UserService } from '../../service/userService';
import { User } from '../../domain/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Password } from 'primeng/password';

@Component({
  selector: 'app-payment',
  standalone: false,

  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {
  existingUser:boolean=false;
 formLogin:FormGroup=new FormGroup({
  username:new FormControl("",Validators.required),
  password:new FormControl("",Validators.required)
  })
  constructor(private userService: UserService) { }
  submitted: boolean = false
  users: User[] | undefined
  ngOnInit(): void {

    this.userService.getUsersDataFromServer().subscribe(data => {
      this.users = data;
    },
      (err) => {
        console.log(`faild on get users from data ${err}`)
      })
    
  }
  existingPassword(password: string) {

    if (this.users?.find((user) => user.password = password))
      return false
    return true
  }
  login() {
    this.submitted = true
    
  //  this.existingUser=this.existingPassword()
  }
}
