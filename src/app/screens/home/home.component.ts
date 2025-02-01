import { Component } from '@angular/core';
import {ListSelectorComponent} from "../../components/list-selector/list-selector.component";
import {TaskListComponent} from "../../components/task-list/task-list.component";
import {NgClass} from "@angular/common";
import {ListService} from "../../services/list/list.service";

@Component({
  selector: 'app-home',
    imports: [
        ListSelectorComponent,
        TaskListComponent,
        NgClass
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    constructor(protected listService: ListService) {
    }

}
