import { Injectable } from '@angular/core';
import {List} from '../../models/list';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private lists: List[] = [
    { id: '1', name: 'Family', color: '#ff453a', taskCount: 3 },
    { id: '2', name: 'Work tasks', color: '#0883fe', taskCount: 2 },
    { id: '3', name: 'Medical', color: '#ffa00a', taskCount: 1 },
    { id: '4', name: 'Shopping', color: '#32d05b', taskCount: 2 }
  ]

  findAll(): List[] {
    return this.lists
  }

  findById(id: string): List | undefined {
    return this.lists.find(l => l.id === id)
  }
}
