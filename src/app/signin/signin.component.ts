import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  myForm : FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]}
      )};


      submitForm() {
        this.submitted = true;
        if (this.myForm.valid) {
          
          // Form is valid, perform necessary actions (e.g., submit data)
          console.log(this.myForm.value);
        } else {
          // Form is invalid, display error messages or take appropriate action
          console.log('Form is invalid.');
        }
      }
};

