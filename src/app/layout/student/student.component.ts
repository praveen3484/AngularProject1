import { Component, OnInit } from '@angular/core';
import {  ReactiveFormsModule,NG_VALIDATORS,FormsModule,FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  // animations: [routerTransition()],
  // providers:[DataService]
  // animations: [routerTransition()]
})
export class StudentComponent implements OnInit {
  itemdata;
  errorData;
  errorStatus;

  constructor(private fb : FormBuilder,private service : DataService ) { }
  
      ngOnInit() {}

      myForm = this.fb.group(
      {
        name : ['',[Validators.required,Validators.maxLength(200)]],

      

        //Email valildation
        Email : ['', [Validators.required, Validators.email]],
  
        //Password
        Password : ['',[Validators.required,Validators.minLength(8)]],

        //Confirm Password
        confirmPassword : ['',[Validators.required,Validators.minLength(8)]],

      },
      {
        validator : this.checkIfMatchingPasswords('Password','confirmPassword') }
      );

    //validation function for password and confirm password field
    checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) 
      {
        return (group: FormGroup) => 
        {
            let passwordInput = group.controls[passwordKey],
            passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value || passwordConfirmationInput.invalid) 
              {
                return passwordConfirmationInput.setErrors({ notEquivalent: true })
              }

            else 
              {
                return passwordConfirmationInput.setErrors(null);
              }
        }
      }

 

  //Register

      Register() 
  { 
    let signupdata = this.myForm.value;
    console.log(signupdata);
    this.service.Register(signupdata).subscribe(
      (data)=>{
        this.itemdata = data;
        this.myForm.value;
        console.log(data,' hit');
      },
      (err: HttpErrorResponse)=>
      { 
        if (err.error instanceof Error) 
        {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred:', err.error.message);
        } else 
        {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          this.errorStatus = err.status;
          this.errorData = err.statusText;
        }
      }
    );
  }

//get method for validations

  get name(){
    return this.myForm.get('name');
  }
  get Email(){
    return this.myForm.get('Email');
  }
  get Password(){
    return this.myForm.get('Password');
  }
  get confirmPassword(){
    return this.myForm.get('confirmPassword');
  }


}
