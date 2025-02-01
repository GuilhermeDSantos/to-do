import { Component } from '@angular/core';
import {ListSelectorComponent} from "../../components/list-selector/list-selector.component";

@Component({
  selector: 'app-home',
    imports: [
        ListSelectorComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
