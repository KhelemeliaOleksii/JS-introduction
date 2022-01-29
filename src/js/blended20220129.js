console.log("Hello");
// Потрібно створити функцію яка буде приймати 1 параметр (масив юзерів)
// і серед них шукати Нарциса і повертати його імя (стрінгою) 
// якщо в масиві немає Нарциса функція повертає пусту стрінгу, 
// умова заключається в тому що НАРЦИС не знає нікого НАРЦИСА знають ВСІ
const people1 = [{
    name: 'Alex',
    know: ['Alex', 'Jhon'],
},
{
    name: 'Jhon',
    know: []
},
{
    name: 'Eva',
    know: ['Alex', 'Jhon']
},
{
    name: 'Ivan',
    know: ['Jhon', 'Eva']
},
]; 
// нарцис  'Jhon'

const people2 = [{
    name: 'Alex',
    know: ['Alex', 'Jhon'],
},
{
    name: 'Jhon',
    know: []
},
{
    name: 'Eva',
    know: []
},
{
    name: 'Ivan',
    know: ['Jhon', 'Eva']
},
]; 
// немає нарциса'

const people3 = [{
    name: 'Alex',
    know: ['Alex','Eva'],
},
{
    name: 'Jhon',
    know: []
},
{
    name: 'Eva',
    know: ['Alex', 'Jhon']
},
{
    name: 'Ivan',
    know: ['Jhon', 'Eva']
},
]; 
// немає нарциса

const people4 = [{
    name: 'Alex',
    know: ['Alex', 'Jhon'],
},
{
    name: 'Jhon',
    know: ['Eva']
},
{
    name: 'Eva',
    know: ['Alex', 'Jhon']
},
{
    name: 'Ivan',
    know: ['Jhon', 'Eva']
},
]; 
//немає нарциса'

function searchSelebrity (argu) {
    for (let i = 0; i < argu.length; i += 1) {
        argu[i].knowMe = 0;
        for (let j = 0; j < argu.length; j += 1) {
            if (argu[j].know.includes(argu[i].name) )
            {
                argu[i].knowMe +=1; 
            }            
        }
    }
    for( let i = 0; i < argu.length; i += 1) {
        if (argu[i].knowMe === (argu.length-1)) {
            return argu[i].name; 
        }
    }
    return 'no one';
}

function searchSelebrity1 (argu) {
    //спробуй через filter i every
    //let amISelebrity = false;
    const array =  argu.filter((item, index, arr) => { 
            arr.every((it) => {
                if (it === item) {
                    return true;
                } else {
                    console.log(argu, it.know.includes(item.name));
                    return it.know.includes(item.name);
                } 

                console.log(tmp);
            //console.log(it.know.includes(item.name));
            });
        // return arr.every((it) => it.know.includes(item))
        });
    //console.log(array);
}

console.log(searchSelebrity1(people1));
console.log(searchSelebrity1(people2));
console.log(searchSelebrity1(people3));
console.log(searchSelebrity1(people4));


