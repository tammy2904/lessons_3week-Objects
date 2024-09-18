// Date

const date = new Date();
console.log('date', date);
// new DAte (year, month, date, hours, minutes, seconds, ms)
// 0 - january, 11- december
const newDate = new Date(2000, 1, 10, 11, 55,5,5000);
console.log('newDate', newDate);
//get a year, month, date, hours, minutes, seconds

console.log('day', newDate.getDate());
console.log('month', newDate.getMonth()); // 0-11
console.log('hours', newDate.getHours());
console.log('minutes', newDate.getMinutes());
console.log('seconds', newDate.getSeconds());
console.log('year', newDate.getFullYear()); 

// a day of a week

console.log('day of the week', newDate.getDay()); // 0-6 (0-Sunday, 1-Monday, ...)
if (newDate.getDay() === 4) {
    console.log('Today is Thursday');
}

// change a year, month, date, hours, minutes, seconds
newDate.setFullYear(2001);
newDate.setMonth(2);
newDate.setDate(20);
console.log('newDate after setFullYear', newDate);
console.log('newDate after setMonth', newDate);
console.log('newDate after setDate', newDate);

