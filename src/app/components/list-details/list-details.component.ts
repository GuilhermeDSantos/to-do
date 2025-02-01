import {Component, Input} from '@angular/core';
import {List} from '../../models/list';

@Component({
  selector: 'app-list-details',
  imports: [],
  templateUrl: './list-details.component.html',
  styleUrl: './list-details.component.css'
})
export class ListDetailsComponent {

  @Input()
  list!: List;

}
