import moment from 'moment';

/**
 * Returns the date of the first Sunday of Advent (nearest Sunday to Nov 30).
 * @param  {number} year
 */
export function getFirstDayOfAdvent(year) {
  const nov30 = moment([year, 10, 30]);
  const sundayBefore = moment(nov30).startOf('week');

  if (nov30.diff(sundayBefore, 'days') < 4) {
    return sundayBefore.toDate();
  }

  return sundayBefore.add(1, 'week').toDate();
}
