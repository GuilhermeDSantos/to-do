import {Task} from "./task";

export interface List {
  id: string
  name: string
  color: string
  icon: string
  tasks: Task[]
}
