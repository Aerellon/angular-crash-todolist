import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crash-todolist';

  /*
    title: string = 'angular-crash-todolist';
  
    constructor() {
      this.changeTitle('New Title');
    }
  
    changeTitle(title: string): void {
      this.title = title;
    }
    */
}