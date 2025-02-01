import {Component, Input} from '@angular/core';
import {Task} from '../../models/task';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-task-item',
  imports: [
    FormsModule
  ],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {

  @Input()
  task!: Task;

}
