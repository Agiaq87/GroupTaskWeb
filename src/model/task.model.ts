import {Project} from "./project.model";

export interface Task {
  id: number;
  title: String;
  description: String;
  initDate: Date;
  endDate: Date;
  relatedTo: Project;
}
