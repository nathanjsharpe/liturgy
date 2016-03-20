import { expect } from 'chai';
import { getEasterDate } from '../src/easter';

describe('getEasterDate', () => {
  it('correctly calculates the date of easter given a year', () => {
    expect(getEasterDate(2016).toDateString())
      .to.equal(new Date(2016, 3 - 1, 27).toDateString());
    expect(getEasterDate(2142).toDateString())
      .to.equal(new Date(2142, 4 - 1, 15).toDateString());
    expect(getEasterDate(1812).toDateString())
      .to.equal(new Date(1812, 3 - 1, 29).toDateString());
  });
});
