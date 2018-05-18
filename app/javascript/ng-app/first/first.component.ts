import { Component } from '@angular/core';
import templateString from './first.html';
import { UserService } from '../user/user.service';
import { I18n } from '../utils/i18n';

@Component({
  template: templateString,
  providers: [ UserService, I18n ]
})
export class FirstComponent {
  user: any;
  users: any[];
  greeting: string;
  usersColumns: any[] = [
    { prop: 'email' },
    { prop: 'role' }
  ];

  constructor(private userService: UserService, private i18n: I18n) {
    this.greeting = i18n.t('hello');
    this.userService.all().subscribe((users: any[]) => {
      this.users = users;
    });
    this.userService.find(1).subscribe((user: object) => {
      this.user = user;
    });
  }
}
