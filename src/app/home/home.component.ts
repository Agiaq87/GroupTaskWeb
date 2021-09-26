import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
}) 
export class HomeComponent implements OnInit {
  title = 'Group Task';
  tasks: TaskService;
  login:boolean=false;
 
  constructor(tasks: TaskService) {
    this.tasks = tasks
  }

  ngOnInit(): void {
  }

}
