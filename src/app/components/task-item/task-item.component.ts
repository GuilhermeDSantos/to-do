import {Component, Input} from '@angular/core';
import {Task} from '../../models/task';
import {FormsModule} from '@angular/forms';
import {DatePipe, NgIf} from '@angular/common';
import {UrlCleanerService} from '../../services/url-cleaner/url-cleaner.service';

@Component({
  selector: 'app-task-item',
  imports: [
    FormsModule,
    NgIf,
    DatePipe
  ],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {

  @Input()
  task!: Task;

  constructor(protected urlCleanerService: UrlCleanerService) {
  }

}
