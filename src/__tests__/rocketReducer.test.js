import { bookRocket } from '../redux/rockets/rockets';

describe('rocket reducer test', () => {
  it('Expect ID of second mission to be 2', () => {
    expect(bookRocket(2).payload).toBe(2);
  });

  it('Expect type to be BOOK', () => {
    expect(bookRocket(2).type).toBe('space-travelers-react/rocketsReducer/BOOK');
  });
});
