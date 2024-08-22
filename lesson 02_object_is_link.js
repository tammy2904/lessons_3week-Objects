// 7- примитивы (не ссылочный тип) 
// 1 -не примитивы - объект (ссылочный тип)

const setName = (entity, value) => {
if (typeof entity === 'object') {
    entity.name = value;
 } else {
    entity = value;
 }
}
 const developer = {
    name: 'Maxim',
 }

let developerName = 'Maxim';
 setName(developer, 'Max');
 setName(developerName, 'Max');
 console.log('developer', developer);
 console.log('developerName', developerName);
//  Maxim не изменился, любой объект является ссылочным типом данных,и у него в любой ситуации сохраняется ссылка, а с другими типами данных, как строка, число, булево и другие - примитивы, у них нет ссылки и поэтому значение останется без изменения.
// next example
console.log({} ==={}); //false
console.log([] === []); //false
// чтобы сравнивание объектов выводило true, нам нужно сравнивать ссылки
 console.log(Object.is({}, {})); // true
 console.log(Object.is([], [])); // true
  const entity = {};
  const entityCopy = entity;
  console.log(entity === entityCopy); //true, потому что entityCopy хранит ссылку на entity, а ссылки в javaScript равны

// С примитивными типами данных работает все по другому
console.log('hello' === 'hello'); // true, у примитивов нет никаких ссылок
console.log(5 === 5);




