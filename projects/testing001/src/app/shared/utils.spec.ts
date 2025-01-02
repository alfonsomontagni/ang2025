import { range, pluck } from './utils';

describe('utils', () => {

  describe('range()', () => {
    it('should create an array from 0 up to 4 when passing range(0, 5)', () => {
      expect(range(0, 5)).toEqual([0, 1, 2, 3, 4]);
    });

    it('should return an empty array if start == end', () => {
      expect(range(5, 5)).toEqual([]);
    });

    it('should work with negative numbers', () => {
      // Esempio: da -2 a 2 (non incluso l’ultimo)
      expect(range(-2, 2)).toEqual([-2, -1, 0, 1]);
    });
  });

  describe('pluck()', () => {
    it('should extract the given property from each object in the array', () => {
      const users = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 }
      ];

      expect(pluck(users, 'name')).toEqual(['Alice', 'Bob']);
      expect(pluck(users, 'age')).toEqual([25, 30]);
    });

    it('should return an empty array if elements is empty', () => {
      expect(pluck([], 'anyField')).toEqual([]);
    });

    it('should return undefined values if field does not exist', () => {
      const data = [{ a: 1 }, { a: 2 }, { a: 3 }];
      // Campo "b" non esiste, ci si aspetta [undefined, undefined, undefined]
      expect(pluck(data, 'b')).toEqual([undefined, undefined, undefined]);
    });
  });

});
