const developerInfo = {
age: 25,
experience: 3,
name:'Maxim',
};
console.log(developerInfo);
const developerExtraInfo = {
    height: 180,
    isJunior: false,
    name:'Igor',
};
console.log(developerExtraInfo);
// Join the two objects together  and create a new object developer with operator spread, example with massive 
// const array = [
// ...array1,
// ...array2]
// First method to create a new object developer with operator spread
const developer = {
...developerInfo,
 ...developerExtraInfo,
 name: 'Nastya',
};
console.log('developer', developer);
//name will be from the last name of  developer object created. If to change developerInfo and developerExtraInfo, so name will be from the last name of developer object created. We can add name: 'Nastya' to developer and it will be the last name of developer object created
// Second method to create a new object developer with assign operator - Object.assign
const developer2 = Object.assign(developerInfo, developerExtraInfo);

console.log('developer2', developer2);
//Spread operator is recommended to create a new object developer







