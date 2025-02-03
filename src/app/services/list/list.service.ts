import {Injectable} from '@angular/core';
import {List} from '../../models/list';

@Injectable({
    providedIn: 'root'
})
export class ListService {

    private _selectedList: List | undefined;

    private lists: List[] = [
        {
            id: '1',
            name: 'Reminders',
            color: '#0883fe',
            icon: 'bi-list-task',
            tasks: [
                {id: '101', name: 'Buy milk', completed: false},
                {id: '102', name: 'Call mom', completed: true}
            ]
        },
        {
            id: '2',
            name: 'Shopping',
            color: '#ff453a',
            icon: 'bi-basket',
            tasks: [
                {id: '201', name: 'Buy eggs', completed: false},
                {id: '202', name: 'Get bread', completed: false},
                {id: '203', name: 'Check offers', dueDate: new Date('2025-02-05T09:00:00'), completed: true}
            ]
        },
        {
            id: '3',
            name: 'Ideas',
            color: '#ffa00a',
            icon: 'bi-lightbulb',
            tasks: [
                {id: '301', name: 'Write blog post', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', completed: false},
                {id: '302', name: 'Research new tech', completed: true},
                {id: '303', name: 'Sketch prototype', completed: false},
                {id: '304', name: 'Brainstorm features', completed: true},
                {id: '305', name: 'Outline project', completed: false}
            ]
        },
        {
            id: '4',
            name: 'Work',
            color: '#32d05b',
            icon: 'bi-laptop',
            tasks: [
                {id: '401', name: 'Finish report', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', dueDate: new Date('2025-02-02T17:00:00'), completed: false},
                {id: '402', name: 'Reply to emails', completed: true}
            ]
        }
    ];

    findAll(): List[] {
        return this.lists
    }

    findById(id: string): List | undefined {
        return this.lists.find(l => l.id === id)
    }

    /* Select List */
    get selectedList(): List | undefined {
        return this._selectedList;
    }

    set selectedList(value: List | undefined) {
        this._selectedList = value;
    }
}
