import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CentralService } from '../../services/central.service';

@Component({
  selector: 'toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
})
export class ToastComponent implements OnInit{
  private service = new CentralService(); 
  private isActive = false;
  private title = "default";
   
  constructor() { 
    // setTimeout(() => {
      //  throw new Error();
      //  this.service.throwUnexpectedError();
    // }, 2000);
  }
  
  ngOnInit() {
    // SUBSCRIBING FOR FUTURE UNEXPECTED ERRORS
    CentralService.activateToast
    .subscribe( response => {
      console.log(response);
      console.log("ActivateToast Subscribe on toast");
      this.makeToast("ooppss!!");
    })
  }
  
  makeToast(title: string) {
    this.isActive = true;
    this.title = title;
    console.log(this);
  }

}
