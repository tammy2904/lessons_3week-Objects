const goodInfo = {
    id: 1,
    price: 80,
    currency: '$',
    name: 'shoes',
}
console.log('goodInfo', goodInfo);
// for of - перебирает массивы
// for in - предназначен для перебирания объектов - устаревшый
 for (const key in goodInfo) {
    console.log('key', key);

// получим значение
const value = goodInfo[key];
console.log('value', value);
 }
//   Object.keys создает массив в котором будут храниться все ключи
const keys = Object.keys(goodInfo);
console.log('keys', keys);
// Object.values создает массив из значений
 const values = Object.values(goodInfo);
console.log('values', values);
//Object.entries объединяет object.keys and object.values
 const entries = Object.entries(goodInfo);
console.log('entries', entries);
console.log(entries[0]);



