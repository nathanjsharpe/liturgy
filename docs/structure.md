# Objects

## LiturgicalDay

### Structure:
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
### Examples
```
{
  name: 'First Sunday of Advent',
  date: Date(2016, 10, 27),
  season: 'Advent',
  lessons: {
    morning: [
      'Isa. 1. 1-20 (21-31)',
      'Matt. 24. 1-28',
    ],
    evening: [
      'Isa. 2. (1-9) 10-end',
      'John 3. 1-21',
    ],
  },
  psalms: {
    morning: [120, 121, 122, 123, 124, 125],
    evening: [126, 127, 128, 129, 130, 131],
  },
  offices: {...}
}
