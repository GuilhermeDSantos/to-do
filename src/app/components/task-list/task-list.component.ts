import { Component } from '@angular/core';
import {ListService} from '../../services/list/list.service';
import {NgForOf, NgIf, NgStyle} from '@angular/common';
import {TaskItemComponent} from '../task-item/task-item.component';

@Component({
  selector: 'app-task-list',
  imports: [
    NgIf,
    NgStyle,
    NgForOf,
    TaskItemComponent
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  constructor(protected listService: ListService) {
    console.log(this.listService.selectedList)
  }

}
