import { Component } from '@angular/core';
import {ListService} from '../../services/list/list.service';
import {NgIf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [
    NgIf,
    NgStyle
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  constructor(protected listService: ListService) {
    console.log(this.listService.selectedList)
  }

}
