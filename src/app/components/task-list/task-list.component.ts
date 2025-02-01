import { Component } from '@angular/core';
import {ListService} from '../../services/list/list.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [
    NgIf
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  constructor(protected listService: ListService) {
    console.log(this.listService.selectedList)
  }

}
