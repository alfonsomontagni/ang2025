
import { UserInteface } from '../../types/user.interface';
import { UsersT01Service } from './users-t01.service';
import { TestBed } from '@angular/core/testing';
import { UtilsService } from '../utils.service';

describe('UsersService t01', () => {
  let usersService: UsersT01Service;
  let utilsService: UtilsService;
  // const utilsServiceMock = {
  //   pluck: jest.fn(),
  // };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UsersT01Service,
        UtilsService,
        // { provide: UtilsService, useValue: utilsServiceMock },
      ],
    });

    usersService = TestBed.inject(UsersT01Service);
    utilsService = TestBed.inject(UtilsService);
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
      expect(usersService.users).toEqual([{ id: '3', name: 'foo' }]);
    });
  });

  describe('removeUser', () => {
    it('should remove a user', () => {
      usersService.users = [{ id: '3', name: 'foo' }];
      usersService.removeUser('3');
      expect(usersService.users).toEqual([]);
    });
  });

  describe('getUsernames', () => {
    it('should get usernames', () => {
      jest.spyOn(utilsService, 'pluck');
      usersService.users = [{ id: '3', name: 'foo' }];
      usersService.getUsernames();
      expect(utilsService.pluck).toHaveBeenCalledWith(
        usersService.users,
        'name'
      );
      // utilsServiceMock.pluck.mockReturnValue(['foo']);
      // expect(usersService.getUsernames()).toEqual(['foo']);
    });
  });
});
