/* Task 2 */

var day = parseInt(process.argv[2]);
var month = process.argv[3];
var year =parseInt(process.argv[4]);

var months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа',
  'сентября', 'октября', 'ноября', 'декабря'];
var day_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30 ,31];

var day_in_year;
if ((year % 4) && !(year % 100 )) {
  day_in_year = 366;
} else {
  day_in_year = 365;
}

index = months.indexOf(month);
var days = day_in_month[7] - day;
i = index + 1;
while (i < 12) {
  days += day_in_month[i];
  i ++;
}

process.stdout.write(days.toString());

/* Put your code here */