import { Component,OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: any[]=[];
  constructor()
  {
  this.todos=[
    {
      srn:1,
      title: "This is Title 1",
      desc: "Description",
      active:true
    },
    {
      srn:2,
      title: "This is Title 2",
      desc: "Description",
      active:true
    },
    {
      srn:3,
      title: "This is Title 3",
      desc: "Description",
      active:true
    },
   ]
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
  deleteTodo(todo:Todo){
    console.log(todo);
    const index =this.todos.indexOf(todo);
    this.todos.splice(index,1)
  }

}
