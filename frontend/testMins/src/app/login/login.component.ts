import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) {

   }

  ngOnInit() {
  }

  handle_login() {
    if(this.username === 'deadboy' && this.password === 'azerty'){
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
