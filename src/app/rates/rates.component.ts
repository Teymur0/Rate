import { Component, Input } from '@angular/core';
import { User } from '../user-list/models/user.model';

function maxLengthGenator(maxRateLength: number): number[] {
  const generatedArray: number[] = [];
  for (let index = 0; index < maxRateLength; index++) {
    generatedArray.push(index);
  }
  return generatedArray;
}

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css'],
})
export class RatesComponent {
  @Input() totalRate!: number;
  @Input() data!: any;
  @Input() maxRateLength!: number;
  rates: number[] = [];

  constructor() {}
  ngOnInit() {
    this.rates = maxLengthGenator(this.maxRateLength);
  }

  calculateHalfNumber(i: number): boolean {
    const roundedNumber = Math.floor(this.totalRate);
    if (i === roundedNumber) {
      const num = this.totalRate - roundedNumber;
      return num ? true : false;
    }
    return false;
  }

  caculateTotalRate(i: number): boolean {
    if (this.calculateHalfNumber(i)) {
      return false;
    }

    if (isNaN(this.totalRate)) {
      return true;
    }

    if (i === this.rates.length) {
      return false;
    }

    return this.totalRate <= i;
  }

  onVote(rateCount: number) {
    const currentUser = JSON.parse(localStorage.getItem('current-user') as any);
    const allUsers = JSON.parse(localStorage.getItem('user-data') as any);
    allUsers.map((user: User) => {
      if (user.id === this.data.id) {
        return {
          ...user,
          rate: user.rate.push({
            id: currentUser[0].id,
            votedRateAmout: rateCount,
          }),
          isVoted: true,
        };
      }
      return user;
    });
    const user_ = User.jsonToModel(allUsers);
    localStorage.setItem('user-data', JSON.stringify(user_));
  }
}
