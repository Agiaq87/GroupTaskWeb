import {Project} from "./project.model";

export interface Task {
  id: number;
  title: String;
  relatedTo: Project;
}
