import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/** REDUX */
import { NgRedux, NgReduxModule } from 'ng2-redux';
import { combineReducers } from 'redux';
import { IAppState, rootReducer, INITIAL_STATE } from './store';

/** ERRORS */

/** COMPONENTS */
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaceholderComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
  constructor(ngRedux: NgRedux<IAppState>) {
    
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
 }
