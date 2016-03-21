# 2016-03-19 Toy around computing liturgical days.

Easter, Advent

# 2016-03-20 Define api for `calendar`.

```js
// Use with year and day:
calendar(2016).day('easter') //=> LiturgicalDay
calendar(2016).day(1, 'Sunday', 'Advent') //=> LiturgicalDay
calendar(2016).day('1st Sunday of Advent') //=> LiturgicalDay
calendar(2016).day('First Sunday of Advent') //=> LiturgicalDay

// Feast days:
calendar(2016).feast('Saint Lucy') //=> LiturgicalDay

// Ranges:
calendar.range(2016, 2017) //=> LiturgicalDay[]
calendar.range('2016-11-01', '2016-11-26') //=> LiturgicalDay[]

// Use with date:
calendar('2016-11-27') //=> LiturgicalDay

// Default today:
calendar() //=> LiturgicalDay (today)
```

# 2016-03-20 Define structure for LiturgicalDay'
```
{
  name: String
  date: Date
  season: String
  color: String
  lessons: Object
  psalms: Object
  offices: Object
}
```
