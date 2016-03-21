import moment from 'moment';
require('moment-range');
import { getEasterDate } from './easter';

// calendar(2016).day('easter') -> LiturgicalDay
// calendar(2016).day(1, 'Sunday', 'Advent') -> LiturgicalDay
// calendar(2016).day('1st Sunday of Advent') -> LiturgicalDay
// calendar(2016).day('First Sunday of Advent') -> LiturgicalDay
// calendar(2016).feast('Saint Lucy') -> LiturgicalDay
// calendar.range(2016, 2017) -> LiturgicalDay[]
// calendar.range('2016-11-01', '2016-11-26') -> LiturgicalDay[]
// calendar('2016-11-27') -> LiturgicalDay
// calendar() -> LiturgicalDay (today)

export function calendar(dateArg) {
  const year = dateArg;

  function day(dayName) {
    const days = {
      easter: getEasterDate(year),
    };

    if (days[dayName]) {
      return days[dayName];
    }

    return null;
  }

  return {
    day,
  };
}
