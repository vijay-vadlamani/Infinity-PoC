import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { searchPipe } from '../search-pipe.pipe';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { TableSearchService } from '../table-search.service';
import { users } from '../data';
import { IUser } from '../iuser';

@Component({
  selector: 'app-table-search',
  templateUrl: './table-search.component.html',
  styleUrls: ['./table-search.component.scss'],
  providers: [TableSearchService]
})
export class TableSearchComponent implements OnInit {

  users: Observable<IUser[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private tableSearchService: TableSearchService,
  ) { }

  // To push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.users = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term
        ? this.tableSearchService.search(term)
        : Observable.of<IUser[]>([]))
      .catch(error => {
        return Observable.of<IUser[]>([]);
      });
  }

}
