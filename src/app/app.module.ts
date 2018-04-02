/** ANGULAR MODULES */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
/** CUSTOM MODULES */
import { AnotherPlaceholderModule } from './components/another-placeholder/another-placeholder.module';
import { PlaceholderModule } from './components/placeholder/placeholder.module';

/** REDUX */
import { NgRedux, NgReduxModule, DevToolsExtension } from 'ng2-redux';
import { combineReducers } from 'redux';
import { IAppState, rootReducer, INITIAL_STATE } from './store';

/** ERRORS */

/** ROUTER */
import { RouterModule } from '@angular/router';
import { ROUTES } from './routes';
/** COMPONENTS */
import { AppComponent } from './app.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { AnotherPlaceholderComponent } from './components/another-placeholder/another-placeholder.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    PlaceholderModule,
    AnotherPlaceholderModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(
    ngRedux: NgRedux<IAppState>, 
    devTools: DevToolsExtension) {

    let enhancers = isDevMode() ? [devTools.enhancer()] : [];

    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancers);
  }
 }
