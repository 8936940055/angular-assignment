import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: any;
  constructor( private readonly fb: FormBuilder,private auth : AuthService) { }
  _signup : SignUp = new SignUp();
  ngOnInit(): void {
    this.form = this.fb.group(
      {
        userName: ['', Validators.required],
        eMail: ['', Validators.required],
        password: ['', Validators.required]
      }
    );
  }
  submitOn() {
   
    return this.signup();
  }
  signup() {
    console.log(" signup :: ", this._signup);
  this.auth.signup(this._signup).subscribe((response) => {
  
    if (response) {
      Swal.fire('Great', 'Signup Successfull', 'success');
      //this.logon(Global.appUser);
    } else {
      Swal.fire('Error', 'Something went wrong', 'error');
    }
  });
}

}


export class SignUp{

  userName : string = '';
  eMail : string = '';
  password : string ='';

}
