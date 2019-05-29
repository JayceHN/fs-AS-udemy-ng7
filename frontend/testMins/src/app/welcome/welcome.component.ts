import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  message: string = 'Some Welcome Message'
  name : string = ' '
  // message = 'Some Welcome Message' is also a string 

  //activattedRoute (dep injection) 
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //COMPILATION ERROR this.message = 5 
    console.log(this.message)
    this.name = this.route.snapshot.params['name']
  }

}
