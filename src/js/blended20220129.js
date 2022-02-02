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
/* 
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
        if (argu[i].knowMe === (argu.length-1) && argu[i].know.length === 0) {
            return argu[i].name; 
        }
    }

    return 'no one';
}
console.log(searchSelebrity(people1));
console.log(searchSelebrity(people2));
console.log(searchSelebrity(people3));
console.log(searchSelebrity(people4));
 */


function searchCelebrity1 (argu) {
    //спробуй через filter i every
    //let amICelebrity = false;
    const arrayCandidate = argu.filter((item)=>item.know.length === 0);
    if (arrayCandidate.length !== 1) {
        return 'No celebrity';
    }
    const isCandidateCelebrity = argu.every((it, indx)=> {
                        if (it.name === arrayCandidate[0].name) {
                            return true;
                        }
                        return it.know.includes(arrayCandidate[0].name);
                    }); 
    if (!isCandidateCelebrity){
        return 'No celebrity';
    }
    return  arrayCandidate[0].name;
}

console.log(searchCelebrity1(people1));
console.log(searchCelebrity1(people2));
console.log(searchCelebrity1(people3));
console.log(searchCelebrity1(people4));


