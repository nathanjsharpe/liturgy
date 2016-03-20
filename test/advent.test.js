import { expect } from 'chai';
import { getFirstDayOfAdvent } from '../src/advent';

describe('getFirstDayOfAdvent', () => {
  it('correctly calculates the date of the first Sunday of Advent', () => {
    expect(getFirstDayOfAdvent(2016).toDateString())
      .to.equal(new Date(2016, 11 - 1, 27).toDateString());
    expect(getFirstDayOfAdvent(2142).toDateString())
      .to.equal(new Date(2142, 12 - 1, 2).toDateString());
    expect(getFirstDayOfAdvent(1812).toDateString())
      .to.equal(new Date(1812, 11 - 1, 29).toDateString());
  });
});
