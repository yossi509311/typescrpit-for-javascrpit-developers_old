export {};

enum Months {
  January = 1,
  February,
  Match,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  Novenber,
  Decenber,
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.Decenber);

// const MonthsJs = {
//   January: 0,
//   February: 1,
// };
//
// console.log(MonthsJs.January);
// console.log(MonthsJs.February);

enum Colors {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008800',
  BLUE = '#0000FF',
  // YELLOW = '#FF0000',
  BLACK = '#000000',
}

let green = Colors.GREEN;
console.log({ green });

enum Colors {
  YELLOW = '#FF0000',
  GRAY = '#808080',
}
Colors.YELLOW;
