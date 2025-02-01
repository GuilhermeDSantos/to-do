import {Component, OnInit} from '@angular/core';
import {ListDetailsComponent} from '../list-details/list-details.component';
import {NgForOf} from '@angular/common';
import {List} from '../../models/list';
import {ListService} from '../../services/list/list.service';

@Component({
  selector: 'app-list-selector',
  imports: [
    NgForOf,
    ListDetailsComponent
  ],
  templateUrl: './list-selector.component.html',
  styleUrl: './list-selector.component.css'
})
export class ListSelectorComponent implements OnInit {

  protected lists: List[] = [];

  constructor(protected listService: ListService) {}

  ngOnInit(): void {
    this.lists = this.listService.findAll()
  }
}
