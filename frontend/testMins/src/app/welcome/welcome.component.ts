import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  message: string = 'Some Welcome Message'
  // message = 'Some Welcome Message' is also a string 

  constructor() { }

  ngOnInit() {
    //COMPILATION ERROR this.message = 5 
    console.log(this.message)
  }

}
