import { CanActivateFn } from '@angular/router';
import { User } from 'src/app/user-list/models/user.model';

export const authGuard: CanActivateFn = (route, state) => {
  if (
    (JSON.parse(localStorage.getItem('current-user') as any) as User[]).length >
    0
  ) {
    return true;
  }
  return false;
};
