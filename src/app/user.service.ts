import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
 import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { IUser } from './iuser';
import { users} from './data';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class UserService {

  data: any = {};
  items: FirebaseListObservable<any[]>;
  _start: number;
  _end;

  firstElementsLoaded: boolean;
  subjectSize = Subject;

  constructor(
    private http: Http,
    private fb: AngularFireDatabase,
  ) {}

  getUsers(): Observable<any> {
    return this.fb.list('/items', {
      query: {
        orderByChild: 'pnr_id',
        limitToFirst: 200,
      }
    });
  }

  addItems(newStart) {
    console.log(newStart);
      return this.fb.list('/items', {
        query: {
          orderByChild: 'pnr_id',
          startAt: newStart,
          endAt: newStart + 200,
        }
      });
    };

  updateUser() {
    this.fb.database.ref().update(updates);
  }
}
