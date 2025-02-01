import {Component, Input} from '@angular/core';
import {List} from '../../models/list';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-list-details',
  imports: [
    NgStyle
  ],
  templateUrl: './list-details.component.html',
  styleUrl: './list-details.component.css'
})
export class ListDetailsComponent {

  @Input()
  list!: List;

}
