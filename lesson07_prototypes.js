/*const person = {
    name: 'Maxim',
    age: 25,
    greet: function() {
        console.log('Greet!');
    }*/

/*console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.greet());*/
// console.log(person.sayHello());
// console.log(person.toString()); 
// console.log(person);
const person = new Object({
    name: 'Maxim',
    age: 25,
    greet: function() {
        console.log('Greet!');
    }
})

Object.prototype.sayHello = function() {
    console.log('Hello!');
    }

    const lena = Object.create(person);
    lena.name = 'Elena';

    const str = new String('I am string');
// Прототип, это - объект, с помощью которого мы расширяем свойства объектов или классов, и с помощью его мы можем устраивать наследование внутри JavaScript