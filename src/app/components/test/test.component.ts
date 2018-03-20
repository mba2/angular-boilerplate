import { Component, OnInit, Input, Output, QueryList, ViewChildren , AfterViewInit} from '@angular/core';

/** REDUX */
import { select, NgRedux } from 'ng2-redux';
import { IAppState } from '../../store';
/** ACTIONS */
import { CHECKIN_SELECTED } from '../../actions';
import { PlaceholderComponent } from '../placeholder/placeholder.component';
import { EventEmitter } from 'events';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';



@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})

export class TestComponent implements OnInit, AfterViewInit {
  @ViewChildren(PlaceholderComponent) days : QueryList<PlaceholderComponent>;
  
  // @Output('onDayToggle') onDayToggle = new EventEmitter();

  @select( (s: IAppState) => s.checkin_date) checkin_date_ref;
  @select( (s: IAppState) => s.checkout_date) checkout_date_ref;

  private checkin_date;
  private checkout_date;

  constructor(private ngRedux: NgRedux<IAppState>) { 
  }
  
  ngOnInit() {
    this.checkin_date_ref.subscribe( i => this.checkin_date = i);
    this.checkout_date_ref.subscribe( i => this.checkout_date = i);
  }
  
  setCheckin(): void {

    // let dayAsString = 
    this.ngRedux.dispatch( { type: CHECKIN_SELECTED  });
  }
  
  ngAfterViewInit() {
    console.log(this.days);
    this.ngRedux.subscribe(() => {console.log(this.ngRedux.getState())})
  }

  test(d: PlaceholderComponent) {
    if(this.checkin_date) {
      console.log(`yes`);

    }else {
      console.log(`not`);
    }
    // console.log(this.checkin_date.subscribe( a => console.log(a)));
    /** NO DATE WAS PREVIOUS CLICKED */
    // if(!this.checkin_date) {
      // this.ngRedux.dispatch( { type: CHECKIN_SELECTED, payload : d.day });
      // console.log(this.ngRedux.getState())
    // }
    // day.isSelected = !day.isSelected;
    // console.log(this.days);

    // this.identifySelections();
  }

  identifySelections() {
    let selectedDays = this.days.filter( day => { return day.isSelected });


    console.log(selectedDays);
  }

}
