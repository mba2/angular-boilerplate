import { Component, OnInit, Input, Output } from '@angular/core';
import { select, NgRedux } from 'ng2-redux';
import { IAppState } from '../../../../after/redux-demo/src/app/store';

@Component({
  selector: 'placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css'],
})
export class PlaceholderComponent implements OnInit{
   @select(s => s.test.title) title;

  constructor(private ngRedux: NgRedux<IAppState>) { 
  }
  
  ngOnInit() {
    console.log(this.ngRedux.getState());
  }

}
