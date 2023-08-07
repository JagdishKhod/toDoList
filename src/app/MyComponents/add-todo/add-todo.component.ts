import { Component,OnInit,Output,EventEmitter} from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title:any
  desc:any
  @Output() todoAdd:EventEmitter<Todo>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  }
onSubmit(){
  const todo={
       srn:8,
      title: this.title,
      desc: this.desc,
      active:true  
}
this.todoAdd.emit(todo);

}
}
