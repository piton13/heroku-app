import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ListService {

  constructor(private http: Http) {}

  getItems(): Observable<any> {
    return this.http.get('/api/list')
      .map(response => {
        return response.json();
      });
  }

}
