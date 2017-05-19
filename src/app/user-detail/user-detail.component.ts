import { Component, OnInit, Input } from '@angular/core';
import { UserService } from './../user.service';
import { IUser } from '../iuser';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  @Input()
  user: IUser;

  constructor(
    private userService: UserService,
  ) {}

  updateUsers() {
    // Implementation in progress
  }

}
