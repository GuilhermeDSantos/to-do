import { Component } from '@angular/core';
import {ListSelectorComponent} from "../../components/list-selector/list-selector.component";
import {TaskListComponent} from "../../components/task-list/task-list.component";

@Component({
  selector: 'app-home',
    imports: [
        ListSelectorComponent,
        TaskListComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
