import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  hide = true;
  user: User;

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]);

  constructor(private authService: AuthService) { }

  ngOnInit(): void {  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit() {
    this.authService.signInUser(this.email.value, this.password.value).then(
      () => {
        this.authService.loginToApi().subscribe(
          data => {
            window.location.href = data; }
        );
      },
      (error) => {
        console.log('Erreur onSubmit in sigin => ' + error);
      }
    );
  }

}
