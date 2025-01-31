import { List } from './list.model';

export interface Task {
  id: number;
  name: string;
  list: List;
}
