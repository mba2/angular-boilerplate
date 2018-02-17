import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

// ERRORS
import { MainError } from './errors/MainError.error';
// COMPONENTS
import { AppComponent } from './app.component';
import { ToastComponent } from './components/toast/toast.component';


@NgModule({
  declarations: [
    AppComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide : ErrorHandler , "useClass": MainError}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
