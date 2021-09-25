import {HttpClient} from "@angular/common/http";
import {Task} from "../../model/task.model";
import {Project} from "../../model/project.model";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private _tasks: Task[] = [
    {
      id: 0,
      title: "Esempio",
      relatedTo: new class implements Project{
        id = 0;
        title = "Project Test";
      }
    }
  ];

  constructor(private httpClient: HttpClient) {

  }

  get tasks(): Task[] {
    return this._tasks;
  }
}
