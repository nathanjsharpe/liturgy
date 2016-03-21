const lessons = {
  Advent: {
    1: [
      {
        morning: [
          'Isa. 1. 1-20 (21-31)',
          'Matt. 24. 1-28',
        ],
        evening: [
          'Isa. 2. (1-9) 10-end',
          'John 3. 1-21',
        ],
      },
      {
        morning: [
          'Isa. 3. 1-15 (16-26)',
          'Mark 1. 1-20',
        ],
        evening: [
          'Isa. 4',
          'Rev. 6',
        ],
      },
      {
        morning: [
          'Isa. 6',
          'Mark 1. 21-end',
        ],
        evening: [
          'Isa. 8. 16—9. 7',
          'Rev. 7',
        ],
      },
      {
        morning: [
          'Isa. 9. 8—10. 4',
          'Mark 2. 1-22',
        ],
        evening: [
          'Isa. 10. 5-23',
          'Rev. 8',
        ],
      },
      {
        morning: [
          'Isa. 10. 24-end (& 11. 1-10)',
          'Mark 2. 23—3. 12',
        ],
        evening: [
          'Isa. 13. 1—14. 2',
          'Rev. 9',
        ],
      },
      {
        morning: [
          'Isa. 14. 3-27 (14:28-15:9)',
          'Mark3. 13-end',
        ],
        evening: [
          'Isa. (16) 17',
          'Rev. 10',
        ],
      },
      {
        morning: [
          'Isa. 18',
          'Mark 4. 1-20',
        ],
        evening: [
          'Isa. 19. 1-17',
          'Rev. 11',
        ],
      },
    ],
    2: [
      {
        morning: [
          'Isa. 5. 1-16',
          'Matt. 24. 29-end',
        ],
        evening: [
          'Isa. 5. (17-30) 18-end',
          'Luke 1. 1-25',
        ],
      },
      {
        morning: [
          'Isa. 19. 18-end (& 20)',
          'Mark 4. 21-end',
        ],
        evening: [
          'Isa. 21. 1-12 (13-17)',
          'Rev. 12',
        ],
      },
      {
        morning: [
          'Isa. 22. 1-14 (15-25)',
          'Mark 5. 1-20',
        ],
        evening: [
          'Isa. (23) 24',
          'Rev. 13',
        ],
      },
      {
        morning: [
          'Isa. (27) 28. 1-8 (9-end)',
          'Mark 5. 21-end',
        ],
        evening: [
          'Isa. 29. 1-14',
          'Rev. 14',
        ],
      },
      {
        morning: [
          'Isa. 29. 15—30:18 (30. 19—31:9)',
          'Mark 6. 1-13',
        ],
        evening: [
          'Isa. 32 (33)',
          'Rev. 15',
        ],
      },
      {
        morning: [
          'Isa. 34 (36)',
          'Mark 6. 14-29',
        ],
        evening: [
          'Isa. (37) 38',
          'Rev. 16',
        ],
      },
      {
        morning: [
          'Isa. (39) 40. 12-end',
          'Mark 6. 30-end',
        ],
        evening: [
          'Isa. 41',
          'Rev. 17',
        ],
      },
    ],
    3: [
      {
        morning: [
          'Isa. 25. 1-9 (10-12)',
          'Matt. 25. 1-30',
        ],
        evening: [
          'Isa. 26. 1-13 (14-end)',
          'Matt. 3',
        ],
      },
      {
        morning: [
          'Isa. 42. 1-17',
          'Mark 7. 1-23',
        ],
        evening: [
          'Isa. 42. 18—43. 13',
          'Rev. 18',
        ],
      },
      {
        morning: [
          'Isa. 43. 14—44. 5',
          'Mark 7. 24—8. 10',
        ],
        evening: [
          'Isa. 44. 6-23',
          'Rev.  19',
        ],
      },
      {
        morning: [
          'Isa. 44. 24—45. 13',
          'Mark 8. 11—9. 1',
        ],
        evening: [
          'Isa. 45. 14-end',
          'Rev.  20',
        ],
      },
      {
        morning: [
          'Isa. 46',
          'Mark 9. 2-32',
        ],
        evening: [
          'Isa. 47',
          'Rev.  21. 1-14',
        ],
      },
      {
        morning: [
          'Isa. 48',
          'Mark 9. 33-end',
        ],
        evening: [
          'Isa. 49. 1-13',
          'Rev.  21. 15—22. 5',
        ],
      },
      {
        morning: [
          'Isa. 49. 14-end',
          'Mark 10. 1-31',
        ],
        evening: [
          'Isa. 50',
          'Rev.  22. 6-end',
        ],
      },
    ],
    4: [
      {
        morning: [
          'Isa. 35',
          'Matt. 25. 31-end',
        ],
        evening: [
          'Isa. 40. 1-11',
          'Luke 1. 26-45',
        ],
      },
      {
        morning: [
          'Isa. 51. 1-16',
          'Mark 10. 32-end',
        ],
        evening: [
          'Isa. 51. 17—52. 12',
          'Jude 1-16',
        ],
      },
      {
        morning: [
          'Isa. 52. 13—53 end',
          'Mark 11. 1-26',
        ],
        evening: [
          'Isa. 54',
          'Jude 17-end',
        ],
      },
      {
        morning: [
          'Isa. 56. 1-8 (9-12)',
          'Mark 11. 27—12. 12',
        ],
        evening: [
          'Isa. 57. (1-14) 15-end',
          '2 Pet. 1',
        ],
      },
      {
        morning: [
          'Isa. 59',
          'Mark 12. 13-34',
        ],
        evening: [
          'Isa. 60. 1-7',
          '2 Pet. 2',
        ],
      },
      {
        morning: [
          'Isa. 60. 8-end',
          'Mark 12. 35—13. 13',
        ],
        evening: [
          'Isa. 61',
          '2 Pet. 3',
        ],
      },
      {
        morning: [
          'Isa. 62',
          'Mark 13. 14-end',
        ],
        evening: [
          null,
          null,
        ],
      },
    ],
    'Christmas Eve': {
      morning: [
        null,
        null,
      ],
      evening: [
        'Zech. 2. 10-end',
        'Heb. 2. 10-18',
      ],
    },
    'Christmas Day': {
      morning: [
        'Isa. 9. 2-7',
        'Matt. 1. (1-17) 18-25',
      ],
      evening: [
        'Isa. 7. 10-14 (15-25)',
        '1 John 4. 7-end',
      ],
    },
    'St Stephen': {
      morning: [
        'Gen. 4. 1-10',
        'Acts 6',
      ],
      evening: [
        '2 Chron. 24. 15-22',
        'Acts 7. 59—8. 8',
      ],
    },
  },
};

export default lessons;
