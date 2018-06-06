/* Task 2 */

var day = parseInt(process.argv[2]);
var month = process.argv[3];
var year =parseInt(process.argv[4]);

var months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа',
  'сентября', 'октября', 'ноября', 'декабря'];
var day_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30 ,31];

if (((year % 4) === 0) && !((year % 100 ) === 0)) {
  day_in_month[1] = 29;
} else {
  day_in_month[1] = 28;
}

index = months.indexOf(month);
var days = day_in_month[index] - day;
i = index + 1;
while (i < 12) {
  days += day_in_month[i];
  i ++;
}

process.stdout.write(days.toString());


/* Put your code here */
