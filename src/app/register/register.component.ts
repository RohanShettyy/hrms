import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  myForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      companyname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]}, 
      { validator: passwordMatchValidator })
    };


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



}

function passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (password && confirmPassword && password.value !== confirmPassword.value) {
    return { 'passwordMismatch': true };
  }

  return null;
}