import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss']
})
export class ListTodosComponent implements OnInit {
  todos = [
    {id: 1, description: 'Pay the contravention'},
    {id: 2, description: 'Become an expert at Angular'},
    {id: 3, description: 'Visit your ass '}
  ]
  todo = {
    id: 1,
    description: 'pay the contravention'
  }

  constructor() { }

  ngOnInit() {
  }

}
