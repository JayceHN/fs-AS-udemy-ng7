import { Component, OnInit } from '@angular/core';

export class Todo{
  constructor (
    public id: number, 
    public description: string,
    public done: boolean,
    public target_date: Date){
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss']
})
export class ListTodosComponent implements OnInit {
  todos = [
    new Todo(1,'Pay the contravention', false, new Date()),
    new Todo(2,'Become an expert at Angular', false, new Date()),
    new Todo(3,'Visit India ', false, new Date()),
    // {id: 1, description: 'Pay the contravention'},
    // {id: 2, description: 'Become an expert at Angular'},
    // {id: 3, description:'Visit your ass ' }
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
