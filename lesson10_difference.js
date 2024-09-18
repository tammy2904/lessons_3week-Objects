// getTime

/*const date1 = new Date(2005, 4, 20);
const date2 = new Date(2006, 4, 10);
//количество msec с Jan 1, 1970
console.log('date1', date1.getTime());
console.log('date1', date2.getTime());

const difference = date1.getTime() - date2.getTime();
console.log('difference', difference);  //-30672000000ms, /1000=seconds, /60 = minutes
console.log('difference', difference /1000 /60); // 511200 min

*/

const startTime = Date.now(); // = Date.now() - startTime analogy to new Date.getTime()


for (let i = 0; i < 1000000; i += 1) {
    // do something
} 

const endTime = Date.now(); // = Date.now() - endTime
console.log('startTime', startTime);
console.log('endTime', endTime);
const difference = endTime - startTime;
// startTime 1726690795208 endTime 1726690795210

console.log('difference', difference); //2 ms.


