import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isThankYouVisible;
  errorData;
  errorStatus;
  FormsData;
  myForm: FormGroup;
  constructor(private fb: FormBuilder, private service: DataService) {
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.myForm = this.fb.group
      (
      {
        Email: ['', [Validators.required, Validators.email]],
        Password: ['', [Validators.required, Validators.minLength(8)]]
      }
      );
  }


  OnSubmit() {
    debugger;
    this.service.Login(this.myForm.value)
      .subscribe
      (
      (data) => {
        this.FormsData = data;
        this.myForm.value;
        this.refresh();

      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error)
          console.log('An error occurred:', err.error.message);
        else {
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          this.errorStatus = err.status;
          this.errorData = err.statusText;
        }
      }
      );
  }

  get Email(){
    return this.myForm.get('Email');
  }
  get Password(){
    return this.myForm.get('Password');
  }

}
