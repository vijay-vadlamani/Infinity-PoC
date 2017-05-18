import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IUser } from './iuser';


@Injectable()
export class TableSearchService {

  constructor(
    private http: Http,
  ) { }

  search(term: string): Observable<any> {
    return this.http
               .get(`items/?name=${term}`)
               .map(response => response.json().data as IUser[]);
  }
}
