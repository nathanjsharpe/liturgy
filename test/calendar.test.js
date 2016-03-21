import { expect } from 'chai';
import { calendar } from '../src/calendar';

describe('calendar', () => {
  it('should create an accurate liturgical calendar', () => {
    expect(calendar(2016).day('easter').toString())
      .to.equal(new Date(2016, 3-1, 27).toString());
  });
});
