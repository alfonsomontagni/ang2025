
import {  Injectable } from '@angular/core';
import { UserInteface } from '../../types/user.interface';
import { BehaviorSubject } from 'rxjs';
//Testing RxJS in Angular
@Injectable()
export class UsersT02Service {
  users$ = new BehaviorSubject<UserInteface[]>([]);

  addUser(user: UserInteface): void {
    this.users$.next([...this.users$.getValue(), user]);
  }

  removeUser(userId: string): void {
    const updatedUsers =  this.users$
    .getValue()
    .filter((user) => userId !== user.id);
    this.users$.next(updatedUsers);
  }

  
}