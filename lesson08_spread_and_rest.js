const citiesRussia = ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск'];
const citiesEurope = ['Берлин', 'Прага', 'Париж'];
const citiesRussiaWithPopulation = {
    Москва: 12519712,
    'Санкт-Петербург': 6251499,
    Казань: 2767300,
    Новосибирск: 2296513,
};
const citiesEuropeWithPopulation = {
    Берлин: 3668271,
    Прага: 1280823,
    Париж: 2273306,
};

// Spread
console.log(...citiesRussia);
console.log(...citiesEurope);


// const allCities = [...citiesRussia, 'Вашингтон', citiesEurope];
const allCities = citiesEurope.concat();
console.log(allCities);
console.log(citiesRussiaWithPopulation);

