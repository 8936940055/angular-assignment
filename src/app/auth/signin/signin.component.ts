import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { SignUp } from '../signup/signup.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  form: any;
  constructor(private readonly fb: FormBuilder,private route : Router, private auth : AuthService ) { }

 
  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

 
  submitLogin() {
    console.log(this.form.value.username);
    console.log(this.form.value.password);
    let loginReq = new Login();
    loginReq.username = this.form.value.username;
    loginReq.user_Pwd = this.form.value.password;
    this.auth.login(loginReq).subscribe((response: any) => {
   
     console.log("response",response)
     this.route.navigateByUrl('../dashboard');
     
      });
    }
  }

  export class Login{
    username : string = '';
    user_Pwd : string = '';
  }
