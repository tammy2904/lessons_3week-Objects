const developer = {
    name: 'Maxim',
    job: 'Frontend Developer',
    experience: 24,
    jobAllInfo: {
        type: 'Frontend',
        framework: {
            name: 'ReactJS',   
    },
}
}

// Опциональная цепочка
// console.log(developer.jobAllInfo.framework);
// 1
if (developer && developer.jobAllInfo && developer.jobAllInfo.framework && developer.jobAllInfo.framework.name) {
    console.log('Разработчик уже знает фреймворк');
} else {
        console.log('Разработчик еще не знает фреймворк');
    }

    if (developer?.jobAllInfo?.framework?.name) {
        console.log('Разработчик уже знает фреймворк');
    } else {
            console.log('Разработчик еще не знает фреймворк');
        }
// 2 method is recommended


