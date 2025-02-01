import {Component, Input} from '@angular/core';
import {List} from '../../models/list';
import {NgClass, NgStyle} from '@angular/common';
import {ListService} from '../../services/list/list.service';

@Component({
  selector: 'app-list-details',
  imports: [
    NgStyle,
    NgClass
  ],
  templateUrl: './list-details.component.html',
  styleUrl: './list-details.component.css'
})
export class ListDetailsComponent {

  @Input()
  list!: List;

  constructor(protected listService: ListService) {
  }

  selectList() {
    this.listService.selectedList = this.list;
  }
}
