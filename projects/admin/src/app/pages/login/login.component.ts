import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });
  error: string;

  constructor(private fa: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
  }

  async attemptLogin() {
    console.log(this.loginForm.value)
    try {
      await this.fa.signInWithEmailAndPassword(this.loginForm.get('email').value, this.loginForm.get('password').value);
      this.router.navigateByUrl('/');
    }
    catch (e) {
      this.error = e.message;
    }
  }
}
