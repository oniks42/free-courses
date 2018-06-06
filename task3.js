/* Task 3 */

var t1 = parseInt(process.argv[2]);
var t2 = parseInt(process.argv[3]);
var t = t1 + t2;

var hour = (t / 3600 | 0);
var remainder = t % 3600;
var minute = (remainder / 60 | 0);
var second = t % 60;

function write_hour(hour) {
  if (hour === 0) {
    //pass
  } else if (hour === 1) {
    process.stdout.write(hour.toString() + ' час ');
  } else if ((hour%10 >= 2) && (hour%10 <= 4) && ((hour / 10 | 0) != 1)) {
    process.stdout.write(hour.toString() + ' часа ');
  } else {
    process.stdout.write(hour.toString() + ' часов ');
  }
}

function write_minute(minute) {
  if (minute === 0) {
    //pass
  } else if (minute === 1) {
    process.stdout.write(minute.toString() + ' минута ');
  } else if ((minute%10 >= 2) && (minute%10 <= 4) && ((minute / 10 | 0) != 1)) {
    process.stdout.write(minute.toString() + ' минуты ');
  } else {
    process.stdout.write(minute.toString() + ' минут ');
  }
}

function write_second(second) {
  if (second === 1) {
    process.stdout.write(second.toString() + ' секунда');
  } else if ((second%10 >= 2) && (second%10 <= 4) && ((second / 10 | 0) != 1)) {
    process.stdout.write(second.toString() + ' секунды');
  } else {
    process.stdout.write(second.toString() + ' секунд');
  }
}

write_hour(hour);
write_minute(minute);
write_second(second);

/* Put your code here */
