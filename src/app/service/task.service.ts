import {HttpClient} from "@angular/common/http";
import {Task} from "../../model/task.model";
import {Project} from "../../model/project.model";
import {Injectable} from "@angular/core";
import {Area} from "../../model/area.model";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private _tasks: Task[] = [
    {
      id: 0,
      title: "Localizzazione in background",
      description: "Richiesta l'implementazione della geolocalizzazione in background",
      initDate: new Date(),
      endDate: new Date(),
      relatedTo: new class implements Project{
        id = 0;
        title = "Gap";
        description = "Il progetto principale della nostra BU";
        area = new class implements Area {
          id = 0;
          name = "Backend";
        }
      }
    },
    {
      id: 0,
      title: "Localizzazione in background",
      description: "Richiesta l'implementazione della geolocalizzazione in background",
      initDate: new Date(),
      endDate: new Date(),
      relatedTo: new class implements Project{
        id = 0;
        title = "Gap";
        description = "Il progetto principale della nostra BU";
        area = new class implements Area {
          id = 0;
          name = "Backend";
        }
      }
    },
    {
      id: 0,
      title: "Localizzazione in background",
      description: "Richiesta l'implementazione della geolocalizzazione in background",
      initDate: new Date(),
      endDate: new Date(),
      relatedTo: new class implements Project{
        id = 0;
        title = "Gap";
        description = "Il progetto principale della nostra BU";
        area = new class implements Area {
          id = 0;
          name = "Backend";
        }
      }
    },
    {
      id: 0,
      title: "Localizzazione in background",
      description: "Richiesta l'implementazione della geolocalizzazione in background",
      initDate: new Date(),
      endDate: new Date(),
      relatedTo: new class implements Project{
        id = 0;
        title = "Gap";
        description = "Il progetto principale della nostra BU";
        area = new class implements Area {
          id = 0;
          name = "Backend";
        }
      }
    },
    {
      id: 0,
      title: "Localizzazione in background",
      description: "Richiesta l'implementazione della geolocalizzazione in background",
      initDate: new Date(),
      endDate: new Date(),
      relatedTo: new class implements Project{
        id = 0;
        title = "Gap";
        description = "Il progetto principale della nostra BU";
        area = new class implements Area {
          id = 0;
          name = "Backend";
        }
      }
    },
    {
      id: 0,
      title: "Localizzazione in background",
      description: "Richiesta l'implementazione della geolocalizzazione in background",
      initDate: new Date(),
      endDate: new Date(),
      relatedTo: new class implements Project{
        id = 0;
        title = "Gap";
        description = "Il progetto principale della nostra BU";
        area = new class implements Area {
          id = 0;
          name = "Backend";
        }
      }
    }
  ];

  constructor(private httpClient: HttpClient) {

  }

  get tasks(): Task[] {
    return this._tasks;
  }
}
