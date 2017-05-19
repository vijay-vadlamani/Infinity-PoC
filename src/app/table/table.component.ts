import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../user.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { columnPipe, rowPipe, searchPipe } from '../search-pipe.pipe';
import { IUser } from '../iuser';
import 'foundation-sites';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  pnrId: number;
  closeResult: string;
  selectedVal: IUser;
  usersName: string;
  public data = [];

  @HostListener('scroll', ['$event'])
  @ViewChild('reveal') reveal: ElementRef;

  constructor(
    private userService: UserService,
    private modalService: NgbModal,
  ) {}

  getUsers() {
    return this.userService.getUsers().subscribe(res => {
      this.data = res;
      this.pnrId = this.data[this.data.length - 1].pnr_id + 1;
    });
  }

  ngOnInit() {
    this.getUsers();
  }

  nextPage() {
    this.pnrId += 200;
    return this.userService.addItems(this.pnrId).subscribe(res => {
      this.data = this.data.concat(res);
    });
  }

  onSelect(user: IUser): void {
    this.selectedVal = user;
  }

  open(user: IUser, content) {
    this.onSelect(user);
    this.usersName = user.name + ' ' + user.surname;
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
