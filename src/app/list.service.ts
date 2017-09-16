// import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

// @Injectable()
export class ListService {

  constructor(private http: Http) {  }

  getItems() {
    return this.http.get('/api/list', {headers: this.getHeaders()})
      .map(res => {
        return res.json();
      });
  }

  private getHeaders() {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

}
