import { Injectable } from '@angular/core';
import {List} from '../../models/list';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private _selectedList!: List;

  private lists: List[] = [
    { id: '1', name: 'Reminders', color: '#0883fe', icon: 'bi-list-task', taskCount: 2 },
    { id: '2', name: 'Shopping', color: '#ff453a', icon: 'bi-basket', taskCount: 3 },
    { id: '3', name: 'Ideas', color: '#ffa00a', icon: 'bi-lightbulb', taskCount: 5 },
    { id: '4', name: 'Work', color: '#32d05b', icon: 'bi-laptop', taskCount: 2 }
  ]

  findAll(): List[] {
    return this.lists
  }

  findById(id: string): List | undefined {
    return this.lists.find(l => l.id === id)
  }

  /* Select List */
  get selectedList(): List {
    return this._selectedList;
  }

  set selectedList(value: List) {
    this._selectedList = value;
  }
}
