import { Component } from '@angular/core';
import { CentralService } from './services/central.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  appIsActive = true;

  private service = new CentralService(); 


   constructor() {
  //    setTimeout(() => {
  //     //  throw new Error();
  //      this.service.throwUnexpectedError();
  //    }, 2000);
  }
}
