import { Injectable } from '@angular/core';
import {List} from '../../models/list';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private lists: List[] = [
    { id: '1', name: 'Family', taskCount: 3 },
    { id: '2', name: 'Work tasks', taskCount: 2 },
    { id: '3', name: 'Medical', taskCount: 1 },
    { id: '4', name: 'Shopping', taskCount: 2 }
  ]

  findAll(): List[] {
    return this.lists
  }

  findById(id: string): List | undefined {
    return this.lists.find(l => l.id === id)
  }
}
