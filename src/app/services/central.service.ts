import { Injectable, Output, EventEmitter } from '@angular/core';
import { ToastComponent } from '../components/toast/toast.component';

@Injectable()
export class CentralService {
  static activateToast : EventEmitter<any> =  new EventEmitter();
 
  constructor() { 
  }

  throwUnexpectedError() : boolean {
    CentralService.activateToast.emit();
    return true;
  }
}
