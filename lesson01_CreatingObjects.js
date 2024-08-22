const developer = {
    name: 'Maxim',
    job: 'Frontend Developer',
    experience: 24,
    jobAllInfo: {
        type: 'Frontend',
        framework: 'ReactJS',   
    }
}
console.log('developer', developer);
// 1 method to get value by key and return value
console.log('name', developer.name);
console.log('jobAllInfo', developer.jobAllInfo);
// 2
const key = 'name';
 console.log(key, developer[key]);
console.log('name', developer['name']);
// Можно создавать цепочки обращения к объектам
 console.log('framework', developer.jobAllInfo.framework);
 console.log('type', developer.jobAllInfo.type);
//  с помощью этой цепочки получим значение framework используем 2ой способ
console.log('framework', developer['jobAllInfo']['framework']);




