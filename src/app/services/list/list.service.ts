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
                {id: '101', title: 'Buy milk', completed: false},
                {id: '102', title: 'Call mom', completed: true}
            ]
        },
        {
            id: '2',
            name: 'Shopping',
            color: '#ff453a',
            icon: 'bi-basket',
            tasks: [
                {id: '201', title: 'Buy eggs', completed: false},
                {id: '202', title: 'Get bread', completed: false},
                {id: '203', title: 'Check offers', completed: true}
            ]
        },
        {
            id: '3',
            name: 'Ideas',
            color: '#ffa00a',
            icon: 'bi-lightbulb',
            tasks: [
                {id: '301', title: 'Write blog post', completed: false},
                {id: '302', title: 'Research new tech', completed: true},
                {id: '303', title: 'Sketch prototype', completed: false},
                {id: '304', title: 'Brainstorm features', completed: true},
                {id: '305', title: 'Outline project', completed: false}
            ]
        },
        {
            id: '4',
            name: 'Work',
            color: '#32d05b',
            icon: 'bi-laptop',
            tasks: [
                {id: '401', title: 'Finish report', completed: false},
                {id: '402', title: 'Reply to emails', completed: true}
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
