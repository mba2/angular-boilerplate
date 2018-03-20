import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlaceholderService {
  private readonly url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: Http) {}

  getItems() : Observable<any> {
    return this.http.get(this.url);
  }
  
}