import { Component } from '@angular/core';
import { Role, User } from './user-list/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {
    if (!JSON.parse(localStorage.getItem('user-data') as any)) {
      const users = [
        {
          id: 1,
          name: 'user1',
          surname: 'surname1',
          role: Role[Role.Admin],
          rate: [],
          totalRate: 0,
          isVoted: false,
        },
        {
          id: 2,
          name: 'user2',
          surname: 'surname2',
          role: Role[Role.User],
          rate: [{ id: 4, votedRateAmout: 2 }],
          totalRate: 0,
          isVoted: false,
        },
        {
          id: 3,
          name: 'user3',
          surname: 'surname3',
          role: Role[Role.User],
          rate: [
            { id: 3, votedRateAmout: 1 },
            { id: 4, votedRateAmout: 5 },
          ],
          totalRate: 0,
          isVoted: false,
        },
        {
          id: 4,
          name: 'user4',
          surname: 'surname4',
          role: Role[Role.User],
          rate: [
            { id: 4, votedRateAmout: 2 },
            { id: 5, votedRateAmout: 5 },
            { id: 6, votedRateAmout: 2 },
          ],
          totalRate: 0,
          isVoted: false,
        },
        {
          id: 5,
          name: 'user5',
          surname: 'surname5',
          role: Role[Role.User],
          rate: [
            { id: 9, votedRateAmout: 1 },
            { id: 2, votedRateAmout: 8 },
            { id: 4, votedRateAmout: 2 },
          ],
          totalRate: 0,
          isVoted: false,
        },
        {
          id: 6,
          name: 'user6',
          surname: 'surname5',
          role: Role[Role.User],
          rate: [
            { id: 9, votedRateAmout: 1 },
            { id: 2, votedRateAmout: 3 },
            { id: 4, votedRateAmout: 2 },
          ],
          totalRate: 0,
          isVoted: false,
        },
        {
          id: 7,
          name: 'user7',
          surname: 'surname7',
          role: Role[Role.User],
          rate: [
            { id: 9, votedRateAmout: 1 },
            { id: 2, votedRateAmout: 8 },
            { id: 4, votedRateAmout: 2 },
          ],
          totalRate: 0,
          isVoted: false,
        },
        {
          id: 8,
          name: 'user8',
          surname: 'surname8',
          role: Role[Role.User],
          rate: [{ id: 5, votedRateAmout: 1 }],
          totalRate: 0,
          isVoted: false,
        },
        {
          id: 9,
          name: 'user9',
          surname: 'surname9',
          role: 'admin',
          rate: [{ id: 2, votedRateAmout: 2 }],
          totalRate: 0,
          isVoted: false,
        },
        {
          id: 10,
          name: 'user10',
          surname: 'surname10',
          role: Role[Role.User],
          rate: [
            { id: 3, votedRateAmout: 1 },
            { id: 6, votedRateAmout: 5 },
          ],
          totalRate: 0,
          isVoted: false,
        },
        {
          id: 11,
          name: 'user11',
          surname: 'surname11',
          role: Role[Role.User],
          rate: [
            { id: 4, votedRateAmout: 2 },
            { id: 5, votedRateAmout: 5 },
            { id: 6, votedRateAmout: 2 },
          ],
          totalRate: 0,
          isVoted: false,
        },
        {
          id: 12,
          name: 'user12',
          surname: 'surname12',
          role: Role[Role.User],
          rate: [
            { id: 9, votedRateAmout: 1 },
            { id: 2, votedRateAmout: 5 },
            { id: 4, votedRateAmout: 2 },
          ],
          totalRate: 0,
          isVoted: false,
        },
        {
          id: 13,
          name: 'user13',
          surname: 'surname13',
          role: Role[Role.User],
          rate: [
            { id: 9, votedRateAmout: 1 },
            { id: 2, votedRateAmout: 5 },
            { id: 4, votedRateAmout: 2 },
          ],
          totalRate: 0,
          isVoted: false,
        },
        {
          id: 14,
          name: 'user14',
          surname: 'surname14',
          role: Role[Role.User],
          rate: [
            { id: 9, votedRateAmout: 1 },
            { id: 2, votedRateAmout: 5 },
            { id: 4, votedRateAmout: 1 },
          ],
          totalRate: 0,
          isVoted: false,
        },
      ];
      localStorage.setItem(
        'user-data',
        JSON.stringify(User.jsonToModel(users))
      );
    }
  }
}
