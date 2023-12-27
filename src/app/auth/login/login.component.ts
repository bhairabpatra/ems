import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/service/auth.service';
import { RouterModule, Routes, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private _authService:AuthService, private _router:Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // You can perform login logic here using this.loginForm.value
      console.log('Form submitted:', this.loginForm.value);
      this._authService.signUp(this.loginForm.value).subscribe((response:any) => {
        if(response.status === 200){
          console.log(response.message)
          const token = response.token;
        this._authService.saveToken(token);
        this._router.navigate(['/dashboard']); // Redirect to dashboard or any desired page
        }else{
            console.warn(response.message)
        }

})
    } else {
      // Form is invalid, show error messages or handle accordingly
      console.log('Form invalid');
    }
  }


}
