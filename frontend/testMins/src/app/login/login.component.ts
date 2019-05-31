import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = 'deadboy'
  password = ''
  error_message = 'Invalid Credentials'
  invalid_login = false 
  //dep injection 
  constructor(private router: Router,
    private hardcodedAuth: HardcodedAuthService) {

   }

  ngOnInit() {
  }

  handle_login() {
    //if(this.username === 'deadboy' && this.password === 'azerty'){
    if(this.hardcodedAuth.authenticate(this.username, this.password)){
      // redirect to welcome page
      this.router.navigate(['welcome', this.username])  
      this.invalid_login = false 
    } else{
      this.invalid_login = true
    }

    // console.log(this.username)
    // console.log(this.password)
  }

}
