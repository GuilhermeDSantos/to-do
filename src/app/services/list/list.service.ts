import { Injectable } from '@angular/core';
import {List} from '../../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private readonly lists: List[] = [];

  constructor() {
    this.lists = [
      {
        id: '1',
        name: 'Work',
        tasks: [
          { id: '101', name: 'Send email', completed: false },
          { id: '102', name: 'Prepare presentation', completed: false },
          { id: '103', name: 'Schedule meeting', completed: false }
        ]
      },
      {
        id: '2',
        name: 'Personal',
        tasks: [
          { id: '201', name: 'Buy groceries', completed: false },
          { id: '202', name: 'Go to the gym', completed: false },
          { id: '203', name: 'Read a book', completed: false }
        ]
      }
    ];
  }

  findAll(): List[] {
    return this.lists;
  }
}
