// string;  symbol - существует для создания уникальных ключей объекта
const user = {
name: 'Maxim',
10: '1234',
undefined: 'undefined',
[false]: false,
};
console.log(Object.keys(user));
const user2 = {
    name2: 'Igor',
    name2: 'Marian', 
};

console.log('user2', user2);
//Сколько бы мы одинаковых ключей не присваивали, будет применяться только последний - name2: 'Marian'
// symbol
const id = Symbol('id');
const user3 = {
    [Symbol('id')]: 1,
    [Symbol('id')]: 2,
    [Symbol('id')]: 3,
};
console.log('user3', user3);
// 3 значения, так как они являются уникальными
const user4 = {
    [id]: 2
}
console.log(user4[id]);// 2 -значение ключа symbol

// in проверяет существует ди ключ в нашем объекте
console.log('name' in user);
console.log('ProgrammingLanguage' in user);
// c in можно проверять ключи у которых тип данных symbol
console.log(id in user4);


