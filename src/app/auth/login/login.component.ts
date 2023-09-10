import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/user-list/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {}
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const userName = form.value.userName;
    const userList = JSON.parse(
      localStorage.getItem('user-data') as any
    ) as User[];
    const currentUser = userList.filter((user: any) => user.name === userName);
    if (currentUser.length > 0) {
      localStorage.setItem('current-user', JSON.stringify(currentUser));

      this.router.navigate(['user-list/']);
    }
  }
}
