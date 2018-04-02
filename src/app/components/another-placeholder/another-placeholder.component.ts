import { Component, OnInit, Input, Output } from '@angular/core';

/** REDUX */
import { NgRedux, select } from 'ng2-redux';

import { IAppState } from '../../store';

import { LOAD_ANOTHER_COMPONENT } from './actions';

import { CHANGE_TITLE, INCREMENT } from '../placeholder/actions';

import "rxjs/add/operator/map";
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'another-placeholder',
  templateUrl: './another-placeholder.component.html',
  styleUrls: ['./another-placeholder.component.css'],
})

export class AnotherPlaceholderComponent implements OnInit, OnDestroy {
  @select(s => s.placeholder.title) title;
  @select(s => s.placeholder.counter) counter$;

  private counter: number;

  constructor(private store: NgRedux<IAppState>) {
    this.counter$
    .subscribe( data => {
      this.counter = data;
    });
   }
  
  sendToOtherComponent(e: HTMLInputElement) {
    this.store.dispatch( { type: CHANGE_TITLE, title: e.value});
  }
  
  increment() {
    this.store.dispatch({ type: INCREMENT }); 
  }

  ngOnInit() {
    this.store.dispatch({ type: LOAD_ANOTHER_COMPONENT, payload : this.counter });
  }

  ngOnDestroy() {
    this.counter$.unsubscribe();
  }
}
