import { Component, OnInit, Input, Output } from '@angular/core';

/** REDUX */
import { select, NgRedux } from 'ng2-redux';
import { IAppState } from '../../store';
/** ACTIONS */
import { INCREMENT } from './actions';



@Component({
  selector: 'placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css'],
})
export class PlaceholderComponent implements OnInit{
  // @select( (s: IAppState) => s.placeholder.counter) counter;
  // @select( (s: IAppState) => s.placeholder.title) title;
  // @select( (s: IAppState) => s.placeholder.items) items;
  

  @Input('day') day;
  @Input('month') month;
  @Input('year') year;
  isSelected = false;

  constructor(private ngRedux: NgRedux<IAppState>) { 
  }
  
  ngOnInit() {}

  // increment(): void {
  //   this.ngRedux.dispatch( { type: INCREMENT });
  // }

  toggleDay() {
    this.isSelected = !this.isSelected;
  }

}
