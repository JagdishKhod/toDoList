import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toDoList';
 constructor(){
  // setTimeout(() => {
  //   this.title ="Title Has Changed"
  // }, 2000);
 }
}
