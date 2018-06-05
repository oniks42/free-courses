/* Task 3 */

var t1 = parseInt(process.argv[2]);
var t2 = parseInt(process.argv[3]);
var t = t1 + t2;

var hour = (t / 3600 | 0);
var remainder = t % 3600;
var minute = (remainder / 60 | 0);
var second = t % 60;

process.stdout.write(hour.toString() + ' час ' + minute.toString() + ' минут ' +
    second.toString() + ' секунд');

/* Put your code here */