import { Component } from '@angular/core';
import {TaskService} from "./service/task.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Group Task';
  tasks: TaskService;

  constructor(tasks: TaskService) {
    this.tasks = tasks
  }
}
