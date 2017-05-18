import { IUser } from './../iuser';
import { Component, OnInit, HostListener } from '@angular/core';
import { UserService } from '../user.service';

import { columnPipe, rowPipe,searchPipe } from '../search-pipe.pipe';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @HostListener('scroll', ['$event'])
  pnrId;
  public data = [];

  constructor(
    private userService: UserService,
  ) {}

  getUsers() {
    for (let i = 0; i < 10000; i + 200) {
    return this.userService.getUsers().subscribe(res => {
      this.data = res;
      console.log(res[0].pnr_id + 200);
      this.pnrId = this.data[this.data.length - 1].pnr_id + 1;
    });
    }
  }

  ngOnInit() {
    this.getUsers();
  }

  nextPage() {
    this.pnrId += 200;
    return this.userService.addItems(this.pnrId).subscribe(res => {
      this.data = this.data.concat(res);
      console.table(this.data);
    });
  }
}
