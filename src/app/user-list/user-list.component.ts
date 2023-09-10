import { Component, DoCheck, OnInit } from '@angular/core';
import { User } from './models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, DoCheck {
  users: User[] = [];
  searchedRate!: number;
  constructor() {}

  ngOnInit(): void {
    this.loadData();
  }

  ngDoCheck() {
    this.loadData();
  }

  loadData() {
    const allUsers = JSON.parse(localStorage.getItem('user-data') as any);
    const currentUser = JSON.parse(localStorage.getItem('current-user') as any);
    this.users = User.voting(allUsers, currentUser);
    localStorage.setItem('user-data', JSON.stringify(allUsers));
  }
  changedSearch(changedRate: number) {}
}
