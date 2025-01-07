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
  existingUser: boolean = false;
  message:string="User does not exist yet Check the username and password you entered or register by clicking on login"
  formLogin: FormGroup=new FormGroup({})

  
  constructor(private userService: UserService) { }
  submitted: boolean = false
  users: User[] | undefined
  ngOnInit(): void {
    this.existingUser=false
    this.formLogin= new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
    this.userService.getUsersDataFromServer().subscribe(data => {
      this.users = data;
    },
      (err) => {
        console.log(`faild on get users from data ${err}`)
      })

  }
  existingPassword(password: string) {

    if (this.users?.find((user) => user.password == password))
      return true
    return false
  }
  entry() {
    console.log(`entry`)
    this.users?.forEach(e => console.log(`${e.name} ${e.password}`))
    this.submitted = true
    console.log(`submitted: ${this.submitted}`)
    this.existingUser = this.existingPassword(this.formLogin.controls['password'].value)
    console.log(`existingUser ${this.existingUser}`)
    console.log(this.formLogin.controls['username'].value)
    console.log(this.formLogin.controls['password'].value)
    ////צריך לעדכן את המקום לשורה הזו:
    // this.submitted=false
    // this.existingUser=false
    //this.formLogin.markAllAsTouched();

  }
}
