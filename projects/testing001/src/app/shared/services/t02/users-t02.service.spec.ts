import { UserInteface } from '../../types/user.interface';
import { TestBed } from '@angular/core/testing';
import { UsersT02Service } from './users-t02.service';

describe('UsersService t02', () => {
  let usersService: UsersT02Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersT02Service],
    });

    usersService = TestBed.inject(UsersT02Service);
  });

  it('creates a service', () => {
    expect(usersService).toBeTruthy();
  });

  describe('addUser', () => {
    it('should add a user', () => {
      const user: UserInteface = {
        id: '3',
        name: 'foo',
      };
      usersService.addUser(user);
      expect(usersService.users$.getValue()).toEqual([
        { id: '3', name: 'foo' },
      ]);
    });
  });

  describe('removeUser', () => {
    it('should remove a user', () => {
      usersService.users$.next([{ id: '3', name: 'foo' }]);
      usersService.removeUser('3');
      expect(usersService.users$.getValue()).toEqual([]);
    });
  });
});