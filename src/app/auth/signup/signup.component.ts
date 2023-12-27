import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/service/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registrationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private _authService:AuthService) {}

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      // You can perform login logic here using this.registrationForm.value
      console.log('Form submitted:', this.registrationForm.value);

      const formData = this.registrationForm.value;
      formData.roles = [{
          name : 'USER_ROLE'
      }]
    console.log("object", JSON.stringify(formData))
      this._authService.createAccount(formData).subscribe((response:any) => {
              console.log(response)
      })
    } else {
      // Form is invalid, show error messages or handle accordingly
      console.log('Form invalid');
    }
  }

}
